import { createWebHistory, createRouter } from 'vue-router';

import Home from '../views/HomePage.vue'
import Realty from '../views/RealtyPage.vue'
import Job from '../views/JobPage.vue'
import Board from '../views/BoardPage.vue'

import RealtyMainBody from '../body/RealtyMainBody.vue'
import LHBody from '../body/LHBody.vue'
import SHBody from '../body/SHBody.vue'
import GHBody from '../body/GHBody.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/realty",
            component: Realty,
            children: [
                {
                    path: "",
                    component: RealtyMainBody
                },
                {
                    path: "LH",
                    component: LHBody
                },
                {
                    path: "SH",
                    component: SHBody
                },
                {
                    path: "GH",
                    component: GHBody
                }
            ]
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