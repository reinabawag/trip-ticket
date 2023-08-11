<script setup>
import Layout from '../Shared/Layout'
import { Head, useForm } from '@inertiajs/vue3'

defineProps({
    bookings: Object
})

const form = useForm({
    id: null
})

const rowClicked = (id) => {
    form.id = id

    form.patch(route('trips.update', form.id), {
        onBefore: () => confirm('Are you sure you want to cancel this booking?'),
    })
}
</script>

<template>
    <Head title="Profile" />

    <Layout>
        <h1>Profile</h1>

        <p>Booking(s)</p>

        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">Plate number</th>
                    <th scope="col">Purpose</th>
                    <th scope="col">Departure</th>
                    <th scope="col">Arrival</th>
                    <th scope="col">Driver</th>
                    <th scope="col">Passenger</th>
                    <th scope="col">Options</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="booking in bookings" :id="booking.id">
                    <td>{{ booking.plate_number }}</td>
                    <td>{{ booking.purpose }}</td>
                    <td>{{ booking.departure }}</td>
                    <td>{{ booking.arrival }}</td>
                    <td>{{ booking.driver }}</td>
                    <td>{{ booking.passenger }}</td>
                    <td>
                        <button type="button" class="btn btn-sm btn-warning" v-if="booking.is_active" @click="rowClicked(booking.id)"><i class="bi bi-x-circle"></i>&nbsp;Cancel</button>
                        <button type="button" class="btn btn-sm btn-secondary disabled" v-else><i class="bi bi-x-circle"></i>&nbsp;Cancelled</button>           
                    </td>
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