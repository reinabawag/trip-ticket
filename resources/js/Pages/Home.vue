<template>
    <Head title="Home" />

    <Layout>
        <h1>Hello, {{ ! $_.isEmpty(user) ? user.name : 'User' }}</h1>
        
        <div class="d-flex justify-content-center">
            <FullCalendar :options="calendarOptions" class="w-100" />
        </div>
    </Layout>
</template>

<script setup>
import { ref, computed  } from 'vue'
import Layout from '../Shared/Layout'
import { Head, usePage } from '@inertiajs/vue3'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import bootstrap5Plugin from '@fullcalendar/bootstrap5'
import timeGrid from '@fullcalendar/timegrid'
import fullCalendarList from '@fullcalendar/list'

const calendarOptions = ref({
    plugins: [dayGridPlugin, interactionPlugin, bootstrap5Plugin, timeGrid, fullCalendarList],
    initialView: 'dayGridMonth',
    themeSystem: 'bootstrap5',
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
    },
    events: '/api/books/events',
    eventClick: function (info) {
        info.jsEvent.preventDefault();

        window.open(info.event.url);
    }
})

const page = usePage()

const user = computed(() => page.props.auth.user)
</script>