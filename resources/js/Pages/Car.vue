<script setup>
import { ref, computed } from 'vue'
import { Head, router, useForm } from '@inertiajs/vue3'
import Layout from '../Shared/Layout.vue'

const props = defineProps({
    cars: Object,
    approvers: Object,
})

const search = ref('')

const form = useForm({
    photo: null,
    plate_number: null,
    make: null,
    model: null,
    user_id: null,
    transmission: 0,
    status: 'Active',
})

const car = useForm({
    id: null,
    status: null,
    plate_number: null,
    make: null,
    user_id: null,
    transmission: null,
    model: null,
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
            car.id = null,
                car.plate_number = null,
                car.make = null,
                car.model = null
                car.transmission = 0,
                car.user_id = null
        }
    });
}

const decomCar = id => {
    router.delete(route('cars.destroy', id), {
        onBefore: () => confirm('Are you sure you want to decom this car?'),
    })
}

const carImage = useForm({
    _method: 'put',
    id: null,
    plate_number: null,
    photo: null,
    oldPhoto: null
})

const carImageInput = ref(null);

const modalCloseButton = ref(null);

const triggerClick = () => {
    modalCloseButton.value.click();
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
                <form
                    @submit.prevent="form.post('/cars', { preserveScroll: true, preserveState: (page) => Object.keys(page.props.errors).length })"
                    class="mt-2">
                    <div class="mb-3">
                        <label for="plate_number" class="form-label fw-bolder">Plate Number</label>
                        <input type="text" id="plate_number" v-model="form.plate_number" class="form-control"
                            :class="{ 'is-invalid': form.errors.plate_number }" placeholder="Plate Number">
                        <div id="plate_number" v-if="form.errors.plate_number" v-text="form.errors.plate_number"
                            class="invalid-feedback"></div>
                    </div>
                    <div class="mb-3">
                        <label for="make" class="form-label fw-bolder">Make</label>
                        <input type="text" id="make" v-model="form.make" class="form-control"
                            :class="{ 'is-invalid': form.errors.make }" placeholder="Make">
                        <div v-if="form.errors.make" v-text="form.errors.make" class="invalid-feedback"></div>
                    </div>
                    <div class="mb-3">
                        <label for="model" class="form-label fw-bolder">Model</label>
                        <input type="text" id="model" v-model="form.model" class="form-control"
                            :class="{ 'is-invalid': form.errors.model }" placeholder="Model">
                        <div v-if="form.errors.model" v-text="form.errors.model" class="invalid-feedback"></div>
                    </div>
                    <div class="mb-3">
                        <label for="transmission" class="form-label fw-bolder">Transmission</label>
                        <select id="transmission" v-model="form.transmission" class="form-select">
                            <option value="0">Manual</option>
                            <option value="1">Automatic</option>
                        </select>
                        <div v-if="form.errors.transmission" v-text="form.errors.transmission" class="invalid-feedback"></div>
                    </div>
                    <div class="mb-3">
                        <label for="user_id" class="form-label fw-bolder">Special Approver</label>
                        <select id="user_id" v-model="form.user_id" class="form-select" :class="{ 'is-invalid': form.errors.user_id }">
                            <option :value="null">None</option>
                            <option v-for="(approver, index) in approvers" :key="index" :value="index" v-text="approver">
                            </option>
                        </select>
                        <div v-if="form.errors.transmission" v-text="form.errors.transmission" class="invalid-feedback"></div>
                    </div>
                    <div class="mb-3">
                        <label for="image" class="form-label fw-bolder">Image</label>
                        <input type="file" @input="form.photo = $event.target.files[0]" class="form-control" id="image"
                            :class="{ 'is-invalid': form.errors.photo }">
                        <div class="invalid-feedback" v-text="form.errors.photo"></div>
                    </div>
                    <div v-if="form.progress" class="progress mb-3" role="progressbar" aria-label="file upload progress"
                        :aria-valuenow="form.progress.percentage" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar" :style="{ width: form.progress.percentage + '%' }"
                            v-text="`${form.progress.percentage}%`"></div>
                    </div>
                    <button type="submit" class="btn btn-success mb-3" :disabled="form.processing"><i
                            class="bi bi-database"></i>&nbsp;Save</button>
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
                            <th scope="col">Transmission</th>
                            <th scope="col">Special Approver</th>
                            <th scope="col">Status</th>
                            <th scope="col">Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="carx in filteredData" :key="carx.id">
                            <td>
                                {{ carx.plate_number }}
                                <input v-if="car.id && car.id == carx.id" class="form-control" v-model="car.plate_number">
                            </td>
                            <td>
                                {{ carx.make }}
                                <input v-if="car.id && car.id == carx.id" class="form-control" v-model="car.make">
                            </td>
                            <td>
                                {{ carx.model }}
                                <input v-if="car.id && car.id == carx.id" class="form-control" v-model="car.model">
                            </td>
                            <td>
                                {{ carx.transmission == 0 ? "Manual" : "Automatic" }}
                                <select v-if="car.id && car.id == carx.id" class="form-select" v-model="car.transmission">
                                    <option value="0">Manual</option>
                                    <option value="1">Automatic</option>
                                </select>
                            </td>
                            <td>
                                {{ carx.user != null ? carx.user.name : 'None'}}
                                <select v-if="car.id && car.id == carx.id" class="form-select" v-model="car.user_id">
                                    <option :value="null">None</option>
                                    <option v-for="(approver, index) in approvers" :key="index" :value="index" v-text="approver"></option>
                                </select>
                            </td>
                            <td>
                                <span v-if="car.isDirty && carx.id == car.id" v-text="carx.status"></span>
                                <span v-if="!car.id" v-text="carx.status"></span>
                                <select v-else-if="car.id && car.id == carx.id" class="form-select"
                                    @change="changeStatus(carx, $event)" v-model="car.status">
                                    <option>Active</option>
                                    <option>Maintenance</option>
                                    <option>Repair</option>
                                </select>
                                <span v-else v-text="carx.status"></span>
                            </td>
                            <td>
                                <div class="d-flex justify-content-center" v-if="!car.id">
                                    <a class="btn btn-primary btn-sm m-auto" href="#" role="button" data-bs-toggle="modal" data-bs-target="#modal" @click="carImage.id = carx.id, carImage.plate_number = carx.plate_number, carImage.oldPhoto = carx.image">
                                        <i class="bi bi-eye"></i>
                                    </a>
                                    <a class="btn btn-success btn-sm m-auto" href="#" role="button"
                                        @click="car.id = carx.id, car.plate_number = carx.plate_number, car.make = carx.make, car.model = carx.model, car.transmission = carx.transmission, car.user_id = carx.user_id, car.status = carx.status"><i
                                            class="bi bi-pencil"></i>
                                        </a>
                                    <a class="btn btn-danger btn-sm m-auto" href="#" role="button"
                                        @click.prevent="decomCar(carx.id)"><i class="bi bi-trash"></i>
                                    </a>
                                </div>
                                <div class="d-flex justify-content-center" v-if="car.isDirty && car.id == carx.id">
                                    <button type="submit" class="btn btn-success btn-sm m-1"
                                        :class="{ disabled: car.status == null }" @click="updateStatus"><i
                                            class="bi bi-database"></i></button>
                                    <button type="reset" class="btn btn-secondary btn-sm m-1" @click="car.reset()"><i
                                            class="bi bi-arrow-counterclockwise"></i></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="modal fade" tabindex="-1" id="modal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <form @submit.prevent="carImage.post($route('cars.update', carImage.id), {
                        forceFormData: true,
                        onSuccess: () => {
                            carImage.reset('id', 'plate_number', 'photo');
                            carImageInput.value = null;
                            triggerClick();
                        }
                    })">
                        <div class="modal-header">
                            <h5 class="modal-title">Image {{ carImage.plate_number }}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img :src="carImage.oldPhoto" alt="car image" class="img-fluid mx-auto d-block">
                            <br>
                            <div class="mb-3">
                                <label for="image" class="form-label">Upload new image</label>
                                <input type="file" ref="carImageInput" @input="carImage.photo = $event.target.files[0]" class="form-control" id="image">
                            </div>
                            <progress v-if="carImage.progress" :value="carImage.progress.percentage" max="100">
                                {{ carImage.progress.percentage }}%
                            </progress>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref="modalCloseButton"><i class="bi bi-x-square"></i>&nbsp;Close</button>
                            <button type="submit" v-if="!$page.props.flash.status" :disabled="carImage.processing" class="btn btn-success"><i class="bi bi-calendar-plus"></i>&nbsp;Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Layout>
</template>
