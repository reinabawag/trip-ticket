<script setup>
import Layout from '../Shared/Layout'
import { Head } from '@inertiajs/vue3'

defineProps({
    bookings: Object
})


</script>

<template>
    <Head title="Profile" />

    <Layout>
        <h1>Profile</h1>

        <p>My Booking(s)</p>

        <table class="table">
            <thead>
                <tr>
                    <td>Plate number</td>
                    <td>Purpose</td>
                    <td>Departure</td>
                    <td>Arrival</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="booking in bookings" :id="booking.id">
                    <td>{{ booking.plate_number }}</td>
                    <td>{{ booking.purpose }}</td>
                    <td>{{ booking.departure }}</td>
                    <td>{{ booking.arrival }}</td>
                </tr>
            </tbody>
        </table>
    </Layout>
</template>