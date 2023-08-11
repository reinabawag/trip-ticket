<?php

namespace App\Mail;

use App\Models\Trip;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class TripBooked extends Mailable
{
    use Queueable, SerializesModels;

    protected $trip;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Trip $trip)
    {
        $this->trip = $trip;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.trips.booked')
                    ->with([
                        'trip' => $this->trip,
                        'user' => $this->trip->user,
                        'car' => $this->trip->car
                    ]);
    }
}
