<template>
    <Head title="Verify Email" />

    <div class="container">
        <h1>You must verify your email first!</h1>
        <div class="alert alert-success" role="alert" v-if="$page.props.flash.message" v-text="$page.props.flash.message" />
        <p>
            Click this <a href="#" @click.prevent="resendVerification">link</a> to resend verification email.
        </p>
    </div>
        
</template>

<script setup>
import { Head, router } from '@inertiajs/vue3';

const resendVerification = () => {
    router.post(route('verification.send'));
}
</script>