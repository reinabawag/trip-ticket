<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTripsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trips', function (Blueprint $table) {
            $table->id();
            $table->string('purpose');
            $table->string('address');
            $table->string('driver');
            $table->string('passenger')->nullable();
            $table->dateTime('departure');
            $table->dateTime('arrival');
            $table->boolean('is_approved')->default(false);
            $table->boolean('is_active')->default(true);
            $table->foreignId('car_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trips');
    }
}
