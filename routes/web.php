<?php

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CarController;
use App\Http\Controllers\TripController;
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

Route::get('/login', function() {
    return Inertia::render('Login');
})->name('login');

Route::post('/logout', [\App\Http\Controllers\LoginController::class, 'logout'])->middleware('auth');

Route::post('/login', [\App\Http\Controllers\LoginController::class, 'authenticate']);

Route::middleware(['auth', 'verified'])->group(function() {
    Route::controller(App\Http\Controllers\TripController::class)->group(function() {
        Route::get('/book', 'index');
        Route::post('/books', 'store');
    });

    Route::resources([
        'cars' => CarController::class,
        'trips' => TripController::class,

    ]);

    Route::get('/profile', function(Request $request) {
        return Inertia::render('Profile', [
            'bookings' => fn () => \App\Http\Resources\TripCarCollection::make(Auth::user()->trips()->latest()->paginate(10)),
        ]);
    })->name('profile');

    Route::apiResources([
        'users' => App\Http\Controllers\UserController::class
    ]);
});
