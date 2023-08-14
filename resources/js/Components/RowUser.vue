<template>
    <tr>
        <td>{{ user.name }}</td>
        <td>
            <span v-for="(role, index) in user.roles" :key="index">{{ role }}&nbsp;</span>
        </td>
    </tr>
</template>

<script setup>
defineProps({
    user: Object
})
</script>