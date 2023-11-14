import * as VueRouter from 'vue-router';
import MainApp from './components/MainApp.vue';
import BlogComp from './components/BlogComp.vue';
import CacheControl from './components/CacheControl.vue';
const routes = [
    { path: '/', name: 'home', component: MainApp },
    { path: '/blog', name: 'blog', component: BlogComp },
    { path: '/cloudflarecache', name: 'cloudflare', component: CacheControl },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: MainApp },
];    

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});
export default router;