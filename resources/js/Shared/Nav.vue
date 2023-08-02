<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
        <div class="container-fluid">
            <a href="#" class="navbar-brand">
                <img src="/img/logoipsum-298.svg" alt="Bootstrap" width="30" height="24">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <NavLink :href="$route('home')" :active="$page.component === 'Home'">
                            <i class="bi bi-house"></i>&nbsp;Home
                        </NavLink>
                    </li>
                    <template v-if="! $_.isEmpty(user)">
                        <li class="nav-item">
                            <NavLink href="/book" :active="$page.component === 'Book'">
                                <i class="bi bi-book"></i>&nbsp;Book
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink href="/cars" :active="$page.component === 'Car'">
                                <i class="bi bi-car-front"></i>&nbsp;Car Management
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink href="/users" :active="$page.component === 'User'">
                                <i class="bi bi-people"></i>&nbsp;User Management
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink href="/profile" :active="$page.component === 'Profile'">
                                <i class="bi bi-person"></i>&nbsp;Profile
                            </NavLink>
                        </li>
                    </template>
                    <li v-if="$page.props.auth.user" class="nav-item">
                        <NavLink href="/logout" method="post" as="button">
                            <i class="bi bi-box-arrow-left"></i>&nbsp;Logout
                        </NavLink>
                    </li>
                    <li v-else class="nav-item">
                        <NavLink href="/login" as="button">
                            <i class="bi bi-box-arrow-right"></i>&nbsp;Login
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import {computed } from 'vue'
import { usePage } from '@inertiajs/vue3'
import NavLink from './NavLink'

const page = usePage()

const user = computed(() => page.props.auth.user)
</script>
