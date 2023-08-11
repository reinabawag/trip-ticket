@component('mail::message')
# Booking Number {{ $trip->id }}

Hi Ma'am/Sir {{ $trip->user->approver->name }},

For your approval!

<p>
    Departure: {{ $trip->departure }}<br />
    Arrival: {{ $trip->arrival }}
</p>

<p>
    Purpose: {{ $trip->purpose }}<br />
    Address: {{ $trip->address }}<br />
    Driver: {{ $trip->driver }}<br />
    Passenger: {{ $trip->passenger }}
</p>

@component('mail::button', ['url' => route('profile')])
Click to approve
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
