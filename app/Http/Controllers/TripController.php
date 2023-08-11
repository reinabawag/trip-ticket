<?php

namespace App\Http\Controllers;

use App\Models\Trip;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Car;
use Carbon\Carbon;
use App\Http\Resources\TripCollection;
use App\Http\Resources\TripResource;
use App\Http\Resources\CarResource;
use App\Mail\TripBooked;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class TripController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Book', [
            'cars' => CarResource::collection(Car::where('status', '<>', 'Decommissioned')->get()),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'purpose' => 'required',
            'address' => 'required',
            'driver' => 'required',
            'departure' => [
                'required',
                'date',
                'after:today',
                function ($attribute, $value, $fail) use ($request) {
                    if ($trip = Trip::where(['car_id' => $request->car_id, $attribute => $value])->first()) {
                        $fail('Conflict with Booking '.$trip->id.' departure '.date('g:i a', strtotime($trip->departure)).' and arrival of '.date('g:i a', strtotime($trip->arrival)));
                    }
                }
            ],
            'arrival' => [
                'required',
                'date',
                'after:departure',
                function ($attribute, $value, $fail) use ($request) {
                    if ($trip = Trip::where('car_id', $request->car_id)->whereBetween('departure', [$request->departure, $request->arrival])->first()) {
                        $fail('Conflict with Booking '.$trip->id.' departure '.date('g:i a', strtotime($trip->departure)).' and arrival of '.date('g:i a', strtotime($trip->arrival)));
                    }
                }
            ],
            'car_id' => 'required|numeric',
            'passenger' => 'nullable|string'
        ]);

        $trip = Auth::user()->trips()->save(
            new Trip($request->only([
                'purpose',
                'address',
                'driver',
                'departure',
                'arrival',
                'car_id',
                'passenger'
            ]
        )));

        \App\Events\TripBooked::dispatch($trip);

        return redirect('/book')->with('status', true);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Trip  $trip
     * @return \Illuminate\Http\Response
     */
    public function show(Trip $trip)
    {
        return \App\Http\Resources\TripCarResource::make($trip->loadMissing('car'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Trip  $trip
     * @return \Illuminate\Http\Response
     */
    public function edit(Trip $trip)
    {
        $this->authorize('update', $trip);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Trip  $trip
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Trip $trip)
    {
        $trip->is_active = false;
        $trip->save();

        return back()->with('message', 'Trip cancelled!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Trip  $trip
     * @return \Illuminate\Http\Response
     */
    public function destroy(Trip $trip)
    {
        //
    }

    public function events(Request $request)
    {
        return new TripCollection(Trip::where('is_active', true)->whereBetween('departure', [$request->start, $request->end])->get());
    }
}
