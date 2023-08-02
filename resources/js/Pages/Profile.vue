<script setup>
import Layout from '../Shared/Layout'
import { Head } from '@inertiajs/vue3'

defineProps({
    bookings: Object
})

const row = (booking) => {
    console.log(booking)
}
</script>

<template>
    <Head title="Profile" />

    <Layout>
        <h1>Profile</h1>

        <p>My Booking(s)</p>

        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Plate number</th>
                    <th scope="col">Purpose</th>
                    <th scope="col">Departure</th>
                    <th scope="col">Arrival</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="booking in bookings" :id="booking.id" @click="row(booking)">
                    <td>{{ booking.plate_number }}</td>
                    <td>{{ booking.purpose }}</td>
                    <td>{{ booking.departure }}</td>
                    <td>{{ booking.arrival }}</td>
                </tr>
            </tbody>
        </table>
    </Layout>
</template>

<style scoped>
table tbody tr {
    cursor: pointer;
}
</style>