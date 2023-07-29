<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Role::create([
            'name' => 'Admin'
        ]);

        \App\Models\Role::create([
            'name' => 'Approver'
        ]);

        \App\Models\Role::create([
            'name' => 'User'
        ]);
    }
}
