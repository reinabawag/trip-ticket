<?php

use App\Http\Controllers\CarController;
use App\Http\Controllers\TripController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

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

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/login', function() {
    return Inertia::render('Login');
})->name('login');

Route::post('/logout', [\App\Http\Controllers\LoginController::class, 'logout'])->middleware('auth');

Route::post('/login', [\App\Http\Controllers\LoginController::class, 'authenticate']);

Route::middleware(['auth'])->group(function() {
    Route::controller(App\Http\Controllers\TripController::class)->group(function() {
        Route::get('/book', 'index');
        Route::post('/books', 'store');
    });

    Route::resources([
        'cars' => CarController::class,
        'trips' => TripController::class,

    ]);

    Route::get('/profile', function() {
        return Inertia::render('Profile', [
            'bookings' => fn () => \App\Http\Resources\TripCarResource::collection(Auth::user()->trips),
        ]);
    })->name('profile');

    Route::apiResources([
        'users' => App\Http\Controllers\UserController::class
    ]);
});
