require('./bootstrap');

import {createApp, h} from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { InertiaProgress } from '@inertiajs/progress'

createInertiaApp({
    resolve: name => require(`./Pages/${name}`),
    title: title => `${title} - Trip Ticket v0.5`,
    setup({el, App, props, plugin}) {
        const app = createApp({render: () => h(App, props)})
        
        app.config.globalProperties.$_ = _
        app.config.globalProperties.$route = route

        app.use(plugin)
        .mount(el)
    },
})

InertiaProgress.init()
