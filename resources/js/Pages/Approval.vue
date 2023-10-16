<script setup>
import { ref, watch } from 'vue';
import Layout from '../Shared/Layout';
import { Head, Link, router, usePage } from '@inertiajs/vue3';

defineProps({
    approvals: Object
})

const page = usePage();

const search = ref(page.props.search);

watch(search, _.debounce(() => {
    console.log(route().params)
    router.reload({
        data: { page: 1, search: search.value },
        only: ['approvals'],
    })
}, 500))

const approveTrip = (id, status) => {
    router.put(route('trips.approval', id), { status: status }, { preserveScroll: true })
} 
</script>

<template>
    <Head title="Approval" />

    <Layout>
        <h1>Approval</h1>

        <div class="d-flex flex-row justify-content-between align-items-baseline">
            <div>
                <p>Approval(s)</p>
            </div>
            <div>
                <input type="text" class="form-control" v-model="search" placeholder="Search">
            </div>
        </div>

        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">Name</th>
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
                <tr v-if="!$_.isEmpty(approvals.data)" v-for="approval in approvals.data" :id="approval.id">
                    <td>{{ approval.name }}</td>
                    <td>{{ approval.car.plate_number }}</td>
                    <td>{{ approval.purpose }}</td>
                    <td>{{ approval.departure }}</td>
                    <td>{{ approval.arrival }}</td>
                    <td>{{ approval.driver }}</td>
                    <td>{{ approval.passenger }}</td>
                    <td>
                        <div class="btn-group" v-if="approval.is_active && approval.is_approved == false">
                            <button type="button" class="btn btn-sm btn-success" @click="approveTrip(approval.id, true)"><i
                                    class="bi bi-check-circle"></i> Approve</button>
                            <button type="button" class="btn btn-sm btn-danger" @click="approveTrip(approval.id, false)"><i
                                    class="bi bi-x-circle"></i> Reject</button>
                        </div>
                        <div class="d-grid gap-2" v-else>
                            <button type="button" class="btn btn-sm disabled btn-block"
                                :class="approval.is_approved ? 'btn-success' : 'btn-warning'"><i
                                    :class="['bi', approval.is_approved ? 'bi-check-circle' : 'bi-x-circle']"></i>&nbsp;{{
                                        approval.is_approved ? 'Approved' : 'Canceled' }}</button>
                        </div>
                    </td>
                </tr>
                <tr v-else>
                    <td colspan="8" class="text-center">No booking to show!</td>
                </tr>
            </tbody>
        </table>

        <nav>
            <ul class="pagination justify-content-end">
                <li class="page-item" v-for="(link, index) in approvals.meta.links" :key="index"
                    :class="{ active: link.active, disabled: link.url == null }">
                    <Link class="page-link" :href="String(link.url)" :only="['approvals']" :data="{ search: search }"
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