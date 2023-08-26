<script setup>
import Layout from '../Shared/Layout'
import { Head } from '@inertiajs/vue3'
import AddUser from '../Components/AddUser'
import { ref, computed } from 'vue'
import { usePage } from '@inertiajs/vue3'
import RowUser from '../Components/RowUser.vue'

const page = usePage()
const search = ref('')

const users = computed(() => page.props.users)
const roles = computed(() => page.props.roles)
const approvers = computed(() => page.props.approvers)

const filteredData = computed(() => {
    return users.value.filter(({ name }) => [name]
        .some(val => val.toLowerCase().includes(search.value.toLowerCase()))
    )
})
</script>

<template>
    <Head title="Users" />

    <Layout>
        <h1>Users</h1>

        <div v-if="$page.props.flash.message" class="alert alert-success alert-dismissible fade show" role="alert">
            {{ $page.props.flash.message }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

        <div class="row">
            <div class="col-4">
                <AddUser :roles="roles" :approvers="approvers" />
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
                            <th class="col">Name</th>
                            <th class="col">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <RowUser v-for="user in filteredData" :key="user.id" :user="user" />
                    </tbody>
                </table>
            </div>
        </div>
    </Layout>
</template>

<style scoped>
table tbody tr {
    cursor: pointer;
}
</style>