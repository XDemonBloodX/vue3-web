import { createRouter, createWebHistory } from 'vue-router'
import PageNotFound from '../views/PageNotFound.vue'
import Welcome from '../views/Welcome.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'welcome',
        component: Welcome
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }, {
        path: '/:pathMatch(.*)*',
        component: PageNotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router