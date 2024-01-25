<?php

namespace App\Http\Controllers;

use App\Models\Car;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('manage', \App\Models\User::class);

        return Inertia::render('Car', [
            'cars' => Car::all(),
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
        $validatedData = $request->validate([
            'plate_number' => ['required', 'regex:/[A-Z]{3} ([0-9]{4})|([0-9]{3})/'],
            'make' => 'required',
            'model' => 'required',
            'status' => 'required',
            'photo' => 'mimes:jpg,png',
        ]);

        $request->photo->store('public');

        if ($request->file('photo')->isValid()) {
            Car::create([
                'plate_number' => $request->plate_number,
                'make' => $request->make,
                'model' => $request->model,
                'status' => $request->status,
                'photo' => $request->file('photo')->hashName(),
            ]);
        }

        return redirect('/cars');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Car  $car
     * @return \Illuminate\Http\Response
     */
    public function show(Car $car)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Car  $car
     * @return \Illuminate\Http\Response
     */
    public function edit(Car $car)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Car  $car
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Car $car)
    {
        $car->status = $request->status;
        $car->plate_number = $request->plate_number;
        $car->make = $request->make;
        $car->model = $request->model;

        $car->save();

        return back()->with('message', 'Car status updated!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Car  $car
     * @return \Illuminate\Http\Response
     */
    public function destroy(Car $car)
    {
        $car->delete();

        return back()->with('message', 'Car decommissioned!');
    }
}
