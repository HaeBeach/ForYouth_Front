import { createWebHistory, createRouter } from 'vue-router';

import Home from '../views/HomePage.vue'
import Realty from '../views/RealtyPage.vue'
import Job from '../views/JobPage.vue'
import Board from '../views/BoardPage.vue'
import GoogleSigninPage from '../views/GoogleSigninPage.vue'
import GoogleLoginResult from '../components/GoogleLoginResult.vue'
import GoogleSignupPage from '../views/GoogleSignupPage.vue'

import RealtyMainBody from '../body/realty/RealtyMainBody.vue'
import JobMainBody from '../body/job/JobMainBody.vue'
import LHBody from '../body/realty/LHBody.vue'
import SHBody from '../body/realty/SHBody.vue'
import GHBody from '../body/realty/GHBody.vue'
import JobPostingBody from '../body/job/JobPostingBody.vue'

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
                    path: "lh",
                    component: LHBody
                },
                {
                    path: "sh",
                    component: SHBody
                },
                {
                    path: "gh",
                    component: GHBody
                }
            ]
        },
        {
            path: "/job",
            component: Job,
            children: [
                {
                    path: "",
                    component: JobMainBody
                },
                {
                    path: "posting",
                    component: JobPostingBody
                }
            ]
        },
        {
            path: "/board",
            component: Board
        },
        {
            path: "/google-signin",
            component: GoogleSigninPage
        },
        {
            path: "/google-signin-result",
            component: GoogleLoginResult
        },
        {
            path: "/google-signup",
            component: GoogleSignupPage
        }
    ]
});

export default router;