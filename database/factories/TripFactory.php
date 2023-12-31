<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TripFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'purpose' => $this->faker->sentence(),
            'address' => $this->faker->address(),
            'driver' => $this->faker->name(),
            'passenger' => $this->faker->name(),
            'departure' => $start = $this->faker->dateTimeBetween('this month', 'now'),
            'arrival' => $this->faker->dateTimeBetween($start, '+5 hours'),
            'is_approved' => false,
            'is_active' => $this->faker->randomElement([true, false]),
            'car_id' => rand(1, \App\Models\Car::count()),
        ];
    }
}
