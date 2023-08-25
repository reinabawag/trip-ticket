<?php

namespace Database\Seeders;

use App\Models\Role;
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

        // \App\Models\Trip::factory()->count(20)->for($user)->create();

        $user2 = \App\Models\User::create([
            'name' => 'MV Leberty Mandal',
            'email' => 'mv.mandal@amwire.com.ph',
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        ]);

        $user2->roles()->attach(1);

        $approvers = \App\Models\User::factory(2)
            // ->has(\App\Models\Trip::factory()->count(10))
            ->hasAttached(Role::find(2))
            ->create();

        $approvers->each(function ($approver) {
            \App\Models\User::factory(2)
                ->for($approver, 'approver')
                // ->has(\App\Models\Trip::factory()->count(20))
                ->hasAttached(Role::find(3))
                ->create();
        });
    }
}
