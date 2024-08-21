import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import BlogPage from '@/pages/BlogPage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import ProjectPage from '@/pages/ProjectPage.vue'
import ContactPage from '@/pages/ContactPage.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/blog',
        name: 'blog',
        component : BlogPage
    },
    {
        path: '/about',
        name: 'about',
        component : AboutPage
    },
    {
        path: '/projects',
        name: 'project',
        component : ProjectPage
    },
    {
        path: '/contacts',
        name: 'çontacts',
        component : ContactPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router