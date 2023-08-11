<script setup>
import { ref, computed, nextTick } from 'vue'
import { Head, useForm } from '@inertiajs/vue3'
import Layout from '../Shared/Layout.vue'

const props = defineProps({
    cars: Array
})

const search = ref('')

const form = useForm({
    photo: null,
    plate_number: null,
    make: null,
    model: null,
    status: 'Active',
})

const car = useForm({
    id: null,
    status: null
})

const filteredData = computed(() => {
    return props.cars.filter(({ plate_number, make, model }) => [plate_number, make, model]
        .some(val => val.toLowerCase().includes(search.value.toLowerCase()))
    )
})

const changeStatus = (carx, event) => {
    car.id = carx.id
    car.status = event.target.value
}

const updateStatus = () => {
    car.patch(route('cars.update', car.id), {
        onSuccess: () => {
            car.id = null
        }
    });
}
</script>

<template>
    <Head title="Car" />

    <Layout>
        <h1>Car Management</h1>

        <div v-if="$page.props.flash.message" class="alert alert-success alert-dismissible fade show" role="alert">
            {{ $page.props.flash.message }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

        <div class="row">
            <div class="col-4">
                <form @submit.prevent="form.post('/cars', { preserveScroll: true, preserveState: (page) => Object.keys(page.props.errors).length })" class="mt-2">
                    <div class="mb-3">
                        <label for="plate_number" class="form-label fw-bolder">Plate Number</label>
                        <input type="text" id="plate_number" v-model="form.plate_number" class="form-control" :class="{ 'is-invalid': form.errors.plate_number }" placeholder="Plate Number">
                        <div id="plate_number" v-if="form.errors.plate_number" v-text="form.errors.plate_number" class="invalid-feedback"></div>
                    </div>
                    <div class="mb-3">
                        <label for="make" class="form-label fw-bolder">Make</label>
                        <input type="text" id="make" v-model="form.make" class="form-control" :class="{ 'is-invalid': form.errors.make }" placeholder="Make">
                        <div v-if="form.errors.make" v-text="form.errors.make" class="invalid-feedback"></div>
                    </div>
                    <div class="mb-3">
                        <label for="model" class="form-label fw-bolder">Model</label>
                        <input type="text" id="model" v-model="form.model" class="form-control" :class="{ 'is-invalid': form.errors.model }" placeholder="Model">
                        <div v-if="form.errors.model" v-text="form.errors.model" class="invalid-feedback"></div>
                    </div>
                    <div class="mb-3">
                        <label for="image" class="form-label fw-bolder">Image</label>
                        <input type="file" @input="form.photo = $event.target.files[0]" class="form-control" id="image" :class="{'is-invalid':form.errors.photo}">
                        <div class="invalid-feedback" v-text="form.errors.photo"></div>
                    </div>
                    <div v-if="form.progress" class="progress mb-3" role="progressbar" aria-label="file upload progress" :aria-valuenow="form.progress.percentage" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" :style="{ width: form.progress.percentage + '%' }" v-text="`${form.progress.percentage}%`"></div>
                    </div>
                    <button type="submit" class="btn btn-success mb-3" :disabled="form.processing"><i class="bi bi-database"></i>&nbsp;Save</button>
                </form>
            </div>
            <div class="col-8">
                <div class="d-flex flex-row-reverse">
                    <div class="mb-2">
                        <input type="text" class="form-control" v-model="search" placeholder="Search">
                    </div>
                </div>

                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Plate Number</th>
                            <th scope="col">Make</th>
                            <th scope="col">Model</th>
                            <th scope="col">Status</th>
                            <th scope="col">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="carx in filteredData" :key="carx.id">
                            <td>{{ carx.plate_number }}</td>
                            <td>{{ carx.make }}</td>
                            <td>{{ carx.model }}</td>
                            <td>
                                <span v-if="!car.id" v-text="carx.status"></span>
                                <select v-else-if="car.id && car.id == carx.id" class="form-select" @change="changeStatus(carx, $event)" :value="carx.status">
                                    <option>Active</option>
                                    <option>Maintenance</option>
                                    <option>Repair</option>
                                    <option>Decommissioned</option>
                                </select>
                                <span v-else v-text="carx.status"></span>
                            </td>
                            <td>
                                <div class="d-flex justify-content-center" v-if="!car.id">
                                    <a class="btn btn-success btn-sm m-auto" href="#" role="button" @click="car.id = carx.id"><i class="bi bi-pencil"></i>&nbsp;Edit</a>
                                    <a class="btn btn-danger btn-sm m-auto" href="#" role="button"><i class="bi bi-trash"></i>&nbsp;Delete</a>
                                </div>
                                <div class="d-flex justify-content-center" v-if="car.isDirty && car.id == carx.id">
                                    <button type="submit" class="btn btn-success btn-sm m-auto" @click="updateStatus"><i class="bi bi-database"></i>&nbsp;Update</button>
                                    <button type="reset" class="btn btn-secondary btn-sm m-auto" @click="car.reset()"><i class="bi bi-arrow-counterclockwise"></i>&nbsp;Reset</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </Layout>
</template>
