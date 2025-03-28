<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserRolesResource;
use Illuminate\Database\Eloquent\Builder;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('manage', \App\Models\User::class);

        return Inertia::render('User', [
            'roles' => fn () =>  \App\Models\Role::pluck('name', 'id'),
            'users' => fn () => UserRolesResource::collection(User::with('roles')->get()),
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
     * @param  \App\Http\Requests\StoreUserRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreUserRequest $request)
    {
        $approver = User::find($request->approver);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        $user->approver()->associate($approver)->save();

        $user->roles()->attach($request->only('role'));

        event(new Registered($user));

        return redirect()->back()->with('message', 'User created!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        $this->authorize('manage', \App\Models\User::class);

        return Inertia::render('UserView', [
            'user' => UserRolesResource::make($user->load('roles')),
            'users' => fn () => UserRolesResource::collection(User::with('roles')->get()),
            'roles' => fn () =>  \App\Models\Role::pluck('name', 'id'),
            'approvers' => fn () => User::whereHas('roles', function (Builder $query) {
                $query->whereIn('id', [1, 2]);
            })->pluck('name', 'id')
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateUserRequest  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);

        $cc = User::find($request->cc);

        if ($request->is_cc)
            $user->cc()->associate($cc);
        else
            $user->cc()->dissociate();

        $user->approver()->associate($request->approver)->save();

        // $user->save();

        $user->roles()->sync($request->only('role'));

        return redirect()->back()->with('message', 'User updated!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
