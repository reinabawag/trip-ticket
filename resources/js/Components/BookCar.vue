<template>
    <div class="card shadow bg-body-tertiary rounded">
        <div class="ratio ratio-16x9">
            <img v-bind:src="`${car.image}`" class="card-img-top" alt="">
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ car.plate_number }}</h5>
            <p class="card-text" v-text="`${car.make} ${car.model}`"></p>
            <p class="card-text"></p>
            <a role="button" href="#" v-if="car.status == 'Active'" @click.prevent="buttonClicked" data-bs-toggle="modal" data-bs-target="#modal" class="btn btn-success"><i class="bi bi-calendar2-plus"></i> Book ME!</a>
            <a role="button" href="#" v-else class="btn btn-danger disabled"><i class="bi bi-calendar-x"></i>&nbsp;{{ car.status }}</a>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    car: Object,
})

const emit = defineEmits(['showModal'])

const buttonClicked = () => {
    emit('showModal', props.car)
}
</script>
