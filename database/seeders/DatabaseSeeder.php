<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call([
            CarSeeder::class,
            RoleSeeder::class,
        ]);

        $user = \App\Models\User::create([
            'name' => 'Reinhard Cire Abawag',
            'email' => 'rein.abawag@amwire.com.ph',
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        ]);

        $user->roles()->attach(1);
    }
}