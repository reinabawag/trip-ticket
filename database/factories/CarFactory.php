<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CarFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $car = array(
            'Toyota' => array('Vios', 'Camry', 'Innova'),
            'Mitsubishi' => array('Expander', 'Monterro'),
            'Hyundai' => array('Accent', 'Sonata')
        );

        return [
            'plate_number' => $this->faker->regexify('[A-Z]{3} [0-9]{4}'),
            'make' => $make = $this->faker->randomElement(array('Toyota', 'Mitsubishi', 'Hyundai')),
            'model' => $this->faker->randomElement($car[$make]),
            'status' => $this->faker->randomElement(array('Active', 'Repair'))
        ];
    }
}
