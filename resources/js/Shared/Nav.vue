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
                        <NavLink href="/" :active="$page.component === 'Home'">
                            Home
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink href="/book" :active="$page.component === 'Book'">
                            Book
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink href="/cars" :active="$page.component === 'Car'">
                            Car Management
                        </NavLink>
                    </li>
                    <li v-if="$page.props.auth.user" class="nav-item">
                        <NavLink href="/logout" method="post" as="button">
                            Logout
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { Link } from '@inertiajs/vue3'
import NavLink from './NavLink'

export default {
    components: {
        Link, NavLink
    },
};
</script>
