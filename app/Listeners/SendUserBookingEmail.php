<?php

namespace App\Listeners;

use App\Events\TripBooked;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendUserBookingEmail implements ShouldQueue
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  \App\Events\TripBooked  $event
     * @return void
     */
    public function handle(TripBooked $event)
    {
        Mail::to($event->trip->user->email)->send(new \App\Mail\TripBooked($event->trip));
    }
}
