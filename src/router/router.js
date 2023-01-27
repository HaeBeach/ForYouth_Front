import { createWebHistory, createRouter } from 'vue-router';

import Home from '../views/HomePage.vue'
import Realty from '../views/RealtyPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/Realty",
            component: Realty
        }
    ]
});

export default router;