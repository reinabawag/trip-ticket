<template>
    <Link class="nav-link" :class="{'active' : active}">
        <slot />
    </Link>
</template>

<script setup>
import { Link } from '@inertiajs/vue3'

defineProps({
    active: Boolean
})
</script>
