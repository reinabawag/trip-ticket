<template>
    <Head title="Home" />

    <Layout>
        <h1>Hello, {{ user != null ? user.name : 'User' }}</h1>

        <div class="mt-5">
            <div class="d-flex justify-content-center">
                <FullCalendar :options="calendarOptions" class="w-100"/>
            </div>
        </div>
    </Layout>
</template>

<script>
import Layout from '../Shared/Layout'
import { Head, Link } from '@inertiajs/vue3'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import bootstrap5Plugin from '@fullcalendar/bootstrap5'
import timeGrid from '@fullcalendar/timegrid'
import fullCalendarList from '@fullcalendar/list'

export default {
    props: {
        availability: Object,
    },
    components: {
        Head, Link, Layout, FullCalendar,
    },
    data() {
        return {
            calendarOptions: {
                plugins: [ dayGridPlugin, interactionPlugin, bootstrap5Plugin, timeGrid,  fullCalendarList],
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
            },
        }
    },
    computed: {
        user() {
            return this.$page.props.auth.user
        }
    },
};
</script>
