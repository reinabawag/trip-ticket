<?php

namespace App\Listeners;

use App\Events\TripBooked;
use App\Mail\TripForApproval;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendForApprovalEmail implements ShouldQueue
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
        if (isset($event->trip->user->approver->email)) {
            Mail::to($event->trip->user->approver->email)
                ->cc($event->trip->user->approver->cc->email)
                ->send(new TripForApproval($event->trip));
        }
    }
}
