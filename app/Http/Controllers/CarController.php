<?php

namespace App\Http\Controllers;

use App\Http\Resources\CarResource;
use App\Models\Car;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
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
            'cars' => CarResource::collection(Car::with('user')->get()),
            'approvers' => fn () => User::whereHas('roles', function (Builder $query) {
                $query->whereIn('id', [1, 2]);
            })->pluck('name', 'id')
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
            'user_id' => 'nullable|integer',
            'transmission' => 'required|integer',
            'photo' => 'mimes:jpg,png',
        ]);

        $request->photo->store('public');

        if ($request->file('photo')->isValid()) {
            Car::create([
                'plate_number' => $request->plate_number,
                'make' => $request->make,
                'model' => $request->model,
                'status' => $request->status,
                'user_id' => $request->user_id,
                'transmission' => $request->transmission,
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
        if ($request->hasFile('photo')) {
            Storage::delete("/public/$car->photo");
            $request->photo->store('public');
            $car->photo = $request->file('photo')->hashName();
            $car->save();

            return back()->with('message', 'Car image updated!');
        }
        
        $car->status = $request->status;
        $car->plate_number = $request->plate_number;
        $car->make = $request->make;
        $car->model = $request->model;
        $car->user_id = $request->user_id;
        $car->transmission = $request->transmission;

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
