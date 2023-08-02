<template>
    <tr>
        <td>{{ user.name }}</td>
        <td>{{ user.roles[0] }}</td>
    </tr>
</template>

<script setup>
defineProps({
    user: Object
})
</script>