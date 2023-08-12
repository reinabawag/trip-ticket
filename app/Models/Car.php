<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Car extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'plate_number',
        'make',
        'model',
        'status',
        'photo',
    ];

    public function trips()
    {
        return $this->hasMany(Trip::class);
    }
}
