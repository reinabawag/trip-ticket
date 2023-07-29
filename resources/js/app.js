require('./bootstrap');

import {createApp, h} from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { InertiaProgress } from '@inertiajs/progress'
import "bootstrap";

createInertiaApp({
    resolve: name => require(`./Pages/${name}`),
    title: title => `${title} - Trip Ticket v0.5`,
    setup({el, App, props, plugin}) {
        createApp({render: () => h(App, props)})
        .use(plugin)
        .mount(el)
    },
})

InertiaProgress.init()
