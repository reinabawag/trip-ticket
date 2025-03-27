<?php

namespace App\Http\Controllers;

use App\Models\Trip;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Car;
use App\Http\Resources\TripCollection;
use App\Http\Resources\CarResource;
use App\Rules\NoOverlappingTrips;
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
            'departure' => [
                'required',
                'date',
                'after:today',
                // function ($attribute, $value, $fail) use ($request) {
                //     if ($trip = Trip::where(['car_id' => $request->car_id, 'is_active' => true])->where(function ($query) use ($request, $value) {
                //         $query->whereBetween('arrival', [$request->arrival, $request->arrival])->orWhereBetween('departure', [$value, $request->arrival]);
                //     })->first()) {
                //         $fail('Conflict with Booking ' . "$trip->id  $attribute " . date('M d, Y g:i a', strtotime($trip->departure)) . ' and arrival of ' . date('M d, Y g:i a', strtotime($trip->arrival)));
                //     }
                // },
                new NoOverlappingTrips
            ],
            'arrival' => [
                'required',
                'date',
                'after:departure'
            ],
            'car_id' => 'required|numeric',
            'passenger' => 'nullable|string'
        ]);

        $trip = Auth::user()->trips()->save(
            new Trip($request->only(
                [
                    'purpose',
                    'address',
                    'driver',
                    'departure',
                    'arrival',
                    'car_id',
                    'passenger'
                ]
            ))
        );

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
        $trip->user->notify((new \App\Notifications\TripCanceled($trip))->afterCommit());

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
        return new TripCollection(Trip::with(['car' => fn ($query) => $query->withTrashed()])
            ->where('is_active', true)
            ->whereBetween('departure', [$request->start, $request->end])
            ->get());
    }

    public function approveTrip(Request $request, Trip $trip)
    {
        if ($request->status) {
            $trip->user->notify((new \App\Notifications\TripApproved($trip))->afterCommit());

            $trip->is_approved = true;
            $trip->save();

            return redirect()->back()->with('message', 'Trip Approved!');
        } else {
            $trip->user->notify((new \App\Notifications\TripCanceled($trip))->afterCommit());

            $trip->is_approved = false;
            $trip->is_active = false;
            $trip->save();

            return redirect()->back()->with('message', 'Trip Canceled!');
        }
    }
}
