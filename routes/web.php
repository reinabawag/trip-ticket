<?php

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CarController;
use App\Http\Controllers\TripController;
use App\Http\Resources\TripCarCollection;
use App\Models\User;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/email/verify', function () {
    if (Auth::user()->hasVerifiedEmail()) {
        return redirect()->intended('home');
    }

    return Inertia::render('Verify');
})->middleware('auth')->name('verification.notice');

Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();

    return redirect()->route('home');
})->middleware(['auth', 'signed'])->name('verification.verify');

Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();

    return back()->with('message', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/login', function () {
    if (Auth::check()) {
        return redirect()->route('home');
    }

    return Inertia::render('Login');
})->name('login');

Route::post('/logout', [\App\Http\Controllers\LoginController::class, 'logout'])->middleware('auth');

Route::post('/login', [\App\Http\Controllers\LoginController::class, 'authenticate']);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::controller(App\Http\Controllers\TripController::class)->group(function () {
        Route::get('/book', 'index');
        Route::post('/books', 'store');
    });

    Route::resources([
        'cars' => CarController::class,
        'trips' => TripController::class,
    ]);

    Route::get('/profile', function (Request $request) {
        return Inertia::render('Profile', [
            'bookings' => fn () => TripCarCollection::make(Auth::user()->trips()->with(['car' => function ($query) {
                $query->withTrashed();
            }, 'user'])->where(function ($query) use ($request) {
                $query->where('purpose', 'like', '%' . $request->search . '%')
                    ->orWhere('departure', 'like', '%' . $request->search . '%')
                    ->orWhere('arrival', 'like', '%' . $request->search . '%')
                    ->orWhere('passenger', 'like', '%' . $request->search . '%')
                    ->orWhere('driver', 'like', '%' . $request->search . '%')
                    ->orWhereHas('car', function ($query) use ($request) {
                        $query->withTrashed();
                        $query->where('plate_number', 'like', '%' . $request->search . '%');
                    });
            })->latest()->paginate()),
        ]);
    })->name('profile');

    Route::apiResources([
        'users' => App\Http\Controllers\UserController::class
    ]);

    // Route::get('/users', [\App\Http\Controllers\UserController::class, 'index'])->name('users.index');

    Route::get('/approvals', function (Request $request) {
        return Inertia::render('Approval', [
            'approvals' => fn () => TripCarCollection::make(
                \App\Models\Trip::where(function ($query) use ($request) {
                    $query->where('purpose', 'like', '%' . $request->search . '%')
                        ->orWhere('departure', 'like', '%' . $request->search . '%')
                        ->orWhere('arrival', 'like', '%' . $request->search . '%')
                        ->orWhere('passenger', 'like', '%' . $request->search . '%')
                        ->orWhere('driver', 'like', '%' . $request->search . '%')
                        ->orWhereHas('car', function ($query) use ($request) {
                            $query->withTrashed();
                            $query->where('plate_number', 'like', '%' . $request->search . '%');
                        })
                        ->orWhereHas('user', function ($query) use ($request) {
                            $query->where('name', 'like', '%' . $request->search . '%');
                        });
                })->whereHas('user', function ($query) use ($request) {
                    $query->when($request->user()->can('approve') && $request->user()->cannot('manage'), function ($query) {
                        $query->whereBelongsTo(Auth::user(), 'approver');
                    });
                })->with(['user', 'car' => fn ($query) => $query->withTrashed()])
                    ->latest()->paginate()
            ),
            'search' => fn () => $request->search,
        ]);
    })->can('approve', \App\Models\User::class)->name('trips.approvals');

    Route::put('/approvals/{trip}', [\App\Http\Controllers\TripController::class, 'approveTrip'])->name('trips.approval')->can('approve', \App\Models\User::class);

    Route::get('/scan', function () {
        return Inertia::render('Scan');
    });
});
