import { createRouter, createWebHistory } from 'vue-router'

import Post from '@/components/Post.vue'
import Author from '@/components/Author.vue'
import PostsByTag from '@/components/PostsByTag.vue'
import AllPosts from '@/components/AllPosts.vue'

const routes = [
    { path: '/author/:username', component: Author },
    { path: '/post/:slug', component: Post },
    { path: '/tag/:tag', component: PostsByTag },
    { path: '/', component: AllPosts },
]

const router = createRouter({
    routes: routes,
    history: createWebHistory(),
})

export default router