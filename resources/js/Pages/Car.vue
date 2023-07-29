<script>
import { Head, useForm } from '@inertiajs/vue3'
import Layout from '../Shared/Layout.vue'

export default {
    props: {
        cars: Array,
    },
    components: {
        Head, Layout,
    },
    data() {
        return {
            search: '',
            form: useForm({
                photo: null,
                plate_number: null,
                make: null,
                model: null,
                status: 'Active',
            }),
        }
    },
    computed: {
        availableCar () {
            const cars = this.cars.filter((available) => {
                return available.status.includes('Active');
            });

            return cars.length
        },
        unavailableCar () {
            const cars = this.cars.filter((available) => {
                return available.status.includes('Repair');
            });

            return cars.length
        },
        filteredData () {
            return this.cars.filter(({ plate_number, make, model }) => [plate_number, make, model]
                .some(val => val.toLowerCase().includes(this.search.toLowerCase()))
            );
        }
    }
};
</script>

<template>
    <Head title="Car" />

    <Layout>
        <h1>Car Management</h1>

        <div class="row mt-5">
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
                    <button type="submit" class="btn btn-primary mb-3" :disabled="form.processing">Submit</button>
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
                        <tr v-for="car in filteredData" :key="car.id">
                            <td>{{ car.plate_number }}</td>
                            <td>{{ car.make }}</td>
                            <td>{{ car.model }}</td>
                            <td>{{ car.status }}</td>
                            <td>{{  }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </Layout>
</template>
