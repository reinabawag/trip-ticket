<script setup>
import Layout from '../Shared/Layout'
import { Head } from '@inertiajs/vue3'
import AddUser from '../Components/AddUser'
import { computed } from 'vue'
import { usePage } from '@inertiajs/vue3'
import RowUser from '../Components/RowUser.vue'

const page = usePage()

const users = computed(() => page.props.users)
const roles = computed(() => page.props.roles)
const approvers = computed(() => page.props.approvers)
</script>

<template>
    <Head title="Profile" />

    <Layout>
        <h1>Users</h1>

        <div class="container">
            <div v-if="$page.props.flash.message" class="alert">
                {{ $page.props.flash.message }}
            </div>
            <div class="row">
                <div class="col-4">
                    <AddUser :roles="roles" :approvers="approvers" />
                </div>
                <div class="col-8">
                    <table class="table">
                        <thead>
                            <tr>
                                <th class="col">Name</th>
                                <th class="col">Role</th>
                            </tr>
                        </thead>
                        <tbody> 
                            <RowUser v-for="user in users" :key="user.id" :user="user"/>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </Layout>
</template>

<style scoped>
table tbody tr {
    cursor: pointer;
}
</style>