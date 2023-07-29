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
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

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
            'cars' => CarResource::collection(Car::all()),
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
            'departure' => 'required',
            'arrival' => 'required',
            'approved' => 'required',
            'car_id' => 'required',
            'passenger' => 'nullable|string'
        ]);

        Auth::user()->trips()->save(
            new Trip($request->only([
                'purpose',
                'address',
                'driver',
                'departure',
                'arrival',
                'approved',
                'car_id',
                'passenger'
            ]
        )));

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
        //
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
        //
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
        $trip = Trip::whereBetween('departure', [$request->start, $request->end])->get();

        return new TripCollection($trip);
    }
}
