<script setup>
import Layout from '../Shared/Layout'
import { Head, usePage, useForm } from '@inertiajs/vue3'
import { computed } from 'vue'

const page = usePage()

const user = computed(() => page.props.user)
const roles = computed(() => page.props.roles)
const approvers = computed(() => page.props.approvers)

console.log(user.value.roles);

const form = useForm({
    name: user.value.name,
    email: user.value.email,
    password: '',
    role: user.value.role,
    approver: user.value.approver
})
</script>

<template>
    <Head title="Users" />

    <Layout>
        <h1>User</h1>

        <div v-if="$page.props.flash.message" class="alert alert-success alert-dismissible fade show" role="alert">
            {{ $page.props.flash.message }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

        <div class="row">
            <div class="col-12">
                <form @submit.prevent="submit">
                    <div class="mb-3">
                        <label for="name" class="form-label fw-bolder">Name</label>
                        <input type="text" class="form-control" v-model="form.name"
                            :class="{ 'is-invalid': form.errors.name }" id="name" placeholder="Name">
                        <div class="invalid-feedback" v-text="form.errors.name"></div>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label fw-bolder">Email</label>
                        <input type="text" class="form-control" v-model="form.email"
                            :class="{ 'is-invalid': form.errors.email }" id="email" placeholder="Email">
                        <div class="invalid-feedback" v-text="form.errors.email"></div>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label fw-bolder">Password</label>
                        <input type="password" class="form-control" v-model="form.password"
                            :class="{ 'is-invalid': form.errors.password }" id="password" placeholder="Password">
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
                        <select class="form-select" id="approver" v-model="form.approver"
                            :class="{ 'is-invalid': form.errors.approver }">
                            <option selected disabled value="">Please select approver</option>
                            <option v-for="(approver, index) in approvers" :key="index" :value="index" v-text="approver">
                            </option>
                        </select>
                        <span class="invalid-feedback" v-text="form.errors.approver"></span>
                    </div>
                    <button type="submit" class="btn btn-success" :disabled="form.processing"><i
                            class="bi bi-database"></i>&nbsp;Save</button>
                </form>
            </div>
        </div>
    </Layout>
</template>