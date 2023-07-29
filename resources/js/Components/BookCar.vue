<template>
    <div class="card shadow bg-body-tertiary rounded">
        <div class="ratio ratio-16x9">
            <img v-bind:src="`${car.image}`" class="card-img-top" alt="">
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ car.plate_number }}</h5>
            <p class="card-text" v-text="`${car.make} ${car.model}`"></p>
            <p class="card-text"></p>
            <a role="button" href="#" @click.prevent="btnClicked" data-bs-toggle="modal" data-bs-target="#modal" class="btn btn-success">Book ME!</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        car: Object
    },
    methods: {
        btnClicked: function() {
            this.$emit('btnClicked', this.car);
        }
    }
};
</script>
