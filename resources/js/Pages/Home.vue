<template>
    <Head title="Home" />

    <Layout>
        <h1>Home</h1>

        <FullCalendar :options="calendarOptions" />

        <div class="modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ trip.title }}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-1">Name: {{ trip.user }}</div>
                        <div class="mb-1">Departure: {{ trip.start }}</div>
                        <div class="mb-1">Arrival: {{ trip.end }}</div>
                        <div class="mb-1">Driver: {{ trip.driver }}</div>
                        <div class="mb-1" v-if="trip.passenger">Passenger: {{ trip.passenger }}</div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Layout from '../Shared/Layout'
import { Head } from '@inertiajs/vue3'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import bootstrap5Plugin from '@fullcalendar/bootstrap5'
import timeGrid from '@fullcalendar/timegrid'
import fullCalendarList from '@fullcalendar/list'
import { Modal, Tooltip } from 'bootstrap'

const calendarOptions = {
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

        trip.value.title = info.event.title;
        trip.value.user = info.event.extendedProps.user;
        trip.value.start = info.event.start;
        trip.value.end = info.event.end;
        trip.value.driver = info.event.extendedProps.driver;
        trip.value.passenger = info.event.extendedProps.passenger;

        modal.value.show();
    },
    eventDidMount: function (info) {
        new Tooltip(info.el, {
            title: info.event.title,
            placement: 'auto',
            trigger: 'hover',
            container: 'body'
        });
    }
}

const modal = ref(null)

const trip = ref({
    title: null,
    name: null,
    start: null,
    end: null,
    driver: null,
    passenger: null,
})

onMounted(() => {
    modal.value = new Modal('.modal')
})
</script>