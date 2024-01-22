<template>
    <tr @click="rowClicked">
        <td>
            {{ user.name }} <em><small>({{ user.email }})</small></em>
        </td>
        <td>
            <span v-for="(role, index) in user.roles" :key="index">{{ role }}&nbsp;</span>
        </td>
    </tr>
</template>

<script setup>
const props = defineProps({
    user: Object
})

const emit = defineEmits(['setUser'])

const rowClicked = () => {
    emit('setUser', props.user)
}
</script>