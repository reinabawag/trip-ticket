<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trip extends Model
{
    use HasFactory;

    protected $casts = [
        'departure' => 'datetime',
        'arrival' => 'datetime',
        'is_approved' => 'boolean',
        'is_active' => 'boolean',
    ];

    protected $fillable = [
        'purpose',
        'address',
        'driver',
        'passenger',
        'departure',
        'arrival',
        'approved',
        'car_id'
    ];

    public function car()
    {
        return $this->belongsTo(Car::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
