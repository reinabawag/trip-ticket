<template>
    <Nav />

    <div class="container">
        <!-- <CarAvailability /> -->
        <div class="mt-5">
            <slot />
        </div>
    </div>

    <footer class="mt-5 mb-5">
        <div class="container">
            <div class="d-flex flex-column align-items-center">
                <div class="p-2">Automation Project of MIS</div>
                <div class="p-2">Copyright 2023 &copy;</div>
            </div>
        </div>
    </footer>
</template>

<script>
import Nav from './Nav'
import CarAvailability from './CarAvailability.vue';

export default {
    components: {
        Nav, CarAvailability
    }
};
</script>
