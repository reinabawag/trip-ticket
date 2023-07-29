<template>
    <dl class="row">
        <dt class="col-sm-2">Booking Number</dt>
        <dd class="col-sm-10">{{ trip.id }}</dd>

        <dt class="col-sm-2">Departure</dt>
        <dd class="col-sm-10">{{ trip.shortDate }}</dd>

        <dt class="col-sm-2">Plate number</dt>
        <dd class="col-sm-10">{{ trip.car.plate_number }}</dd>

        <dt class="col-sm-2">Departure time</dt>
        <dd class="col-sm-10">{{ trip.shortD }}</dd>

        <dt class="col-sm-2">Arrival time</dt>
        <dd class="col-sm-10">{{ trip.shortA }}</dd>

        <dt class="col-sm-2">Trip to</dt>
        <dd class="col-sm-10">{{ trip.purpose }}</dd>

        <dt class="col-sm-2">Address</dt>
        <dd class="col-sm-10">{{ trip.address }}</dd>

        <dt class="col-sm-2">Driver</dt>
        <dd class="col-sm-10">{{ trip.driver }}</dd>

        <dt class="col-sm-2">Passenger</dt>
        <dd class="col-sm-10">{{ trip.passenger }}</dd>
    </dl>
</template>

<script>
export default {
    props: {
        trip: Object,
    },
};
</script>
