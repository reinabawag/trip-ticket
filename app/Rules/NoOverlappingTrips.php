<?php

namespace App\Rules;

use App\Models\Trip;
use Illuminate\Contracts\Validation\DataAwareRule;
use Illuminate\Contracts\Validation\Rule;

class NoOverlappingTrips implements Rule, DataAwareRule
{
    protected $data = [];

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function setData($data)
    {
        $this->data = $data;

        return $this;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return ! Trip::where(['car_id' => $this->data['car_id'], 'is_active' => true])->where(function($query) {
            $query->whereBetween('departure', [$this->data['departure'], $this->data['arrival']])
                ->orWhereBetween('arrival', [$this->data['departure'], $this->data['arrival']])
                ->orWhere(function($query) {
                    $query->where('departure', '<=', $this->data['departure'])
                        ->where('arrival', '>=', $this->data['arrival']);
                });
        })->exists();
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The car is already booked for the selected date range.';
    }
}
