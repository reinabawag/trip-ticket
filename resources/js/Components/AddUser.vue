<script setup>
import { useForm, usePage } from '@inertiajs/vue3'

defineProps({
    'roles': Object,
    'approvers' : Object
})

const form = useForm({
    name: null,
    email: null,
    password: null,
    role: 3,
    approver: ''
})

const formSubmit = () => {
    form.post(route('users.store', { 
        preserveScroll: true,
        preserveState: false
    }))
}

const change = () => {
    form.approver = ''
}
</script>

<template>
    <div>
        <form @submit.prevent="formSubmit">
            <div class="mb-3">
                <label for="name" class="form-label fw-bolder">Name</label>
                <input type="text" class="form-control" v-model="form.name" :class="{ 'is-invalid' : form.errors.name }" id="name" placeholder="Name">
                <div class="invalid-feedback" v-text="form.errors.name"></div>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label fw-bolder">Email</label>
                <input type="text" class="form-control" v-model="form.email" :class="{ 'is-invalid' : form.errors.email }" id="email" placeholder="Email">
                <div class="invalid-feedback" v-text="form.errors.email"></div>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label fw-bolder">Password</label>
                <input type="password" class="form-control" v-model="form.password" :class="{ 'is-invalid' : form.errors.password }" id="password" placeholder="Password">
                <div class="invalid-feedback" v-text="form.errors.password"></div>
            </div>
            <div class="mb-3">
                <label for="role" class="form-label fw-bolder">Role</label>
                <select class="form-select" id="role" v-model="form.role" @change="change">
                    <option v-for="(role, index) in roles" :key="index" :value="index" v-text="role"></option>
                </select>
            </div>
            <div class="mb-3" v-if="form.role == 3">
                <label for="approver" class="form-label fw-bolder">Approver</label>
                <select class="form-select" id="approver" v-model="form.approver" :class="{ 'is-invalid': form.errors.approver }">
                    <option selected disabled value="">Please select approver</option>
                    <option v-for="(approver, index) in approvers" :key="index" :value="index" v-text="approver"></option>
                </select>
                <span class="invalid-feedback" v-text="form.errors.approver"></span>
            </div>
            <button type="submit" class="btn btn-success"><i class="bi bi-database"></i>&nbsp;Save</button>
        </form>
    </div>
</template>