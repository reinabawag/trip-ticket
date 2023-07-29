<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Trip;
use App\Models\Car;

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
});

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
});
