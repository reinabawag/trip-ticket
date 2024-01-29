@component('mail::message')
# Booking Number {{ $trip->id }}

Hi {{ $user->name }},

Confirmation of your Booking.

<p>
    Departure: {{ $trip->departure }}<br />
    Arrival: {{ $trip->arrival }}
</p>

<p>
    Plate number: {{ $trip->car->plate_number }}<br />
    Make/Model: {{ $trip->car->make }}, {{ $trip->car->model }}
</p>

<p>
    Purpose: {{ $trip->purpose }}<br />
    Address: {{ $trip->address }}<br />
    Driver: {{ $trip->driver }}<br />
    Passenger: {{ $trip->passenger }}
</p>

Awaiting approval of your respective approver.

Thanks,<br>
{{ config('app.name') }}
@endcomponent
