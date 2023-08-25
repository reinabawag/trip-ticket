<script setup>
import { ref, watch } from 'vue';
import Layout from '../Shared/Layout';
import { Head, useForm, Link, router, usePage } from '@inertiajs/vue3';

defineProps({
    bookings: Object
})

const form = useForm({
    id: null
})

const page = usePage();

const search = ref(page.props.search);

const rowClicked = (id) => {
    form.id = id

    form.patch(route('trips.update', form.id), {
        onBefore: () => confirm('Are you sure you want to cancel this booking?'),
    })
}

watch(search, _.debounce(() => {
    router.reload({
        data: { search: search.value, page: 1 },
        only: ['bookings'],
    })
}, 500))
</script>

<template>
    <Head title="Profile" />

    <Layout>
        <h1>Profile</h1>

        <div class="d-flex flex-row justify-content-between align-items-baseline">
            <div>
                <p>Booking(s)</p>
            </div>
            <div>
                <input type="text" class="form-control" v-model="search" placeholder="Search">
            </div>
        </div>

        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">Plate number</th>
                    <th scope="col">Purpose</th>
                    <th scope="col">Departure</th>
                    <th scope="col">Arrival</th>
                    <th scope="col">Driver</th>
                    <th scope="col">Passenger</th>
                    <th scope="col">Status</th>
                    <th scope="col">Options</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="!$_.isEmpty(bookings.data)" v-for="booking in bookings.data" :id="booking.id">
                    <td>{{ booking.car.plate_number }}</td>
                    <td>{{ booking.purpose }}</td>
                    <td>{{ booking.departure }}</td>
                    <td>{{ booking.arrival }}</td>
                    <td>{{ booking.driver }}</td>
                    <td>{{ booking.passenger }}</td>
                    <td>
                        <span v-if="booking.is_active && !booking.is_approved">For Approval</span>
                        <span v-if="booking.is_active && booking.is_approved">Approved</span>
                        <span v-if="!booking.is_active && booking.is_approved">Approved</span>
                        <span v-if="!booking.is_active && !booking.is_approved">Canceled</span>
                    </td>
                    <td>
                        <button type="button" class="btn btn-sm btn-warning" v-if="booking.is_active"
                            @click="rowClicked(booking.id)"><i class="bi bi-x-circle"></i>&nbsp;Cancel</button>
                        <button type="button" class="btn btn-sm btn-warning disabled" v-else><i
                                class="bi bi-x-circle"></i>&nbsp;Canceled</button>
                    </td>
                </tr>
                <tr v-else>
                    <td colspan="8" class="text-center">No booking to show!</td>
                </tr>
            </tbody>
        </table>

        <nav>
            <ul class="pagination justify-content-end">
                <li class="page-item" v-for="(link, index) in bookings.meta.links" :key="index"
                    :class="{ active: link.active, disabled: link.url == null }">
                    <Link class="page-link" :href="String(link.url)" :only="['bookings']" :data="{ search: search }"
                        preserve-scroll preserve-state v-html="link.label" />
                </li>
            </ul>
        </nav>
    </Layout>
</template>

<style scoped>
table tbody tr {
    cursor: pointer;
}
</style>