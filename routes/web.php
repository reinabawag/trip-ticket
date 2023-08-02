<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Trip;
use App\Models\Car;
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
    
    Route::controller(App\Http\Controllers\CarController::class)->group(function () {
        Route::get('/cars', 'index');
        Route::post('/cars', 'store');
    });

    Route::get('/profile', function() {
        return Inertia::render('Profile', [
            'bookings' => fn () => \App\Http\Resources\TripCarResource::collection(Auth::user()->trips),
        ]);
    })->name('profile');

    Route::apiResources([
        'users' => App\Http\Controllers\UserController::class
    ]);
});
