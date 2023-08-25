<script setup>
import Layout from '../Shared/Layout'
import { Head } from '@inertiajs/vue3'
import { QrcodeStream } from 'vue-qrcode-reader'
import { ref, onMounted } from 'vue';

const selected = ref(null);
const devices = ref([]);

onMounted(async () => {
    devices.value = (await navigator.mediaDevices.enumerateDevices())
        .filter(({ kind }) => kind === 'videoinput')

    if (devices.value.length > 0) {
        selected.value = devices.value[0]
    }
})

const onDetect = ([firstDetectedCode ]) => {
    console.log('camera', firstDetectedCode.rawValue );
}
</script>

<template>
    <Head title="Scan" />

    <Layout>
        <h1>Scan</h1>

        <div v-if="$page.props.flash.message" class="alert">
            {{ $page.props.flash.message }}
        </div>

        <div class="row">
            <select v-model="selected" class="form-control">
                <option v-for="device in devices" :key="device.label" :value="device">
                    {{ device.label }}
                </option>
            </select>

            <qrcode-stream :constraints="{ deviceId: selected.deviceId }" @detect="onDetect" :formats="['qr_code']"
                v-if="selected !== null">
            </qrcode-stream>
            <p v-else class="error">No cameras on this device</p>
        </div>
    </Layout>
</template>