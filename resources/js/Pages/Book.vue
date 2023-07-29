<template>
    <Head title="Book"></Head>

    <Layout>
        <h1>Book</h1>

        <div class="row row-cols-1 row-cols-md-4 g-4 mt-5">
            <div class="col" v-for="car in cars" :key="car.id">
                <BookCar :car="car" @btn-clicked="clicked" />
            </div>
        </div>

        <div class="modal fade" tabindex="-1" id="modal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <form @submit.prevent="form.post('/books', { preserveScroll: true, onSuccess: () => form.reset() })">
                        <div class="modal-header">
                            <h5 class="modal-title">Book {{ form.plate_number }}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div v-if="!$page.props.flash.status">
                                <div class="mb-3">
                                    <label for="departure" class="form-label">Departure</label>
                                    <input type="datetime-local" v-model="form.departure" class="form-control" :class="{ 'is-invalid' : form.errors.departure }" id="departure">
                                    <div class="invalid-feedback" v-text="form.errors.departure"></div>
                                </div>
                                <div class="mb-3">
                                    <label for="arrival" class="form-label">Arrival time</label>
                                    <input type="datetime-local" v-model="form.arrival" class="form-control" :class="{ 'is-invalid' : form.errors.arrival }" id="arrival">
                                    <div class="invalid-feedback" v-text="form.errors.arrival"></div>
                                </div>
                                <div class="mb-3">
                                    <label for="purpose" class="form-label">Purpose</label>
                                    <input type="text" v-model="form.purpose" class="form-control" :class="{ 'is-invalid' : form.errors.purpose }" id="purpose">
                                    <div class="invalid-feedback" v-text="form.errors.purpose"></div>
                                </div>
                                <div class="mb-3">
                                    <label for="address" class="form-label">Address</label>
                                    <input type="text" v-model="form.address" class="form-control" :class="{ 'is-invalid' : form.errors.address }" id="address">
                                    <div class="invalid-feedback" v-text="form.errors.address"></div>
                                </div>
                                <div class="mb-3">
                                    <label for="driver" class="form-label">Driver</label>
                                    <input type="text" v-model="form.driver" class="form-control" :class="{ 'is-invalid' : form.errors.driver }" id="driver">
                                    <div class="invalid-feedback" v-text="form.errors.driver"></div>
                                </div>
                                <div class="mb-3">
                                    <label for="passenger" class="form-label">Passenger</label>
                                    <input type="text" v-model="form.passenger" class="form-control" id="passenger">
                                </div>
                            </div>
                            <div v-else>
                                <p>Booked!</p>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" v-if="!$page.props.flash.status" :disabled="form.processing" class="btn btn-success">Book</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
import Layout from '../Shared/Layout'
import { Head, useForm, router } from '@inertiajs/vue3'
import BookCar from '../Components/BookCar'

export default {
    props: {
        cars: Object,
    },
    components: {
        Layout, Head, BookCar,
    },
    mounted() {
        const myModalEl = document.getElementById('modal')

        myModalEl.addEventListener('hidden.bs.modal', event => {
            router.reload({ only: ['flash'] })
        })
    },
    data() {
        return {
            form: useForm({
                plate_number: null,
                departure: null,
                arrival: null,
                purpose: null,
                address: null,
                driver: null,
                passenger: null,
                approved: false,
                car_id: null,
            }),
        }
    },
    methods: {
        clicked: function(car) {
            this.form.car_id = car.id
            this.form.plate_number = car.plate_number
        },
    }
};
</script>
