import { createWebHistory, createRouter } from 'vue-router';

import Home from '../views/HomePage.vue'
import Realty from '../views/RealtyPage.vue'
import Job from '../views/JobPage.vue'
import Board from '../views/BoardPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/realty",
            component: Realty
        },
        {
            path: "/job",
            component: Job
        },
        {
            path: "/board",
            component: Board
        }
    ]
});

export default router;