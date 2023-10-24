# rp-django-vue-graph
Working site made following the Real Python tutorial. Emphasis on working!

If you followed the Real Python tutorial to create a [blog application using Django, GraphQL and Vue.js](https://realpython.com/python-django-blog/) and got disillusioned or at the very least disappointed to see not much was working, this is for you.

You see, according to every comment asking for help in the Real Python post, the frontend section of the tutorial is obsolete because it uses Vue2 instead of the newer Vue3. Of course, you can install Vue2 and follow the tutorial accordingly, but Vue2 will be unsupported from Dec 31, 2023. Still, nobody will stop you if this is what you want, in that case just install it with:
`npm install vue@^2`
The rest of the tutorial will probably be the same still, maybe using the older versions of router and apollo as well.

This guide is meant to help you get the frontend section of the tutorial working with Vue3 and Apollo, without needing to change the tech stack. All of this was done following the [Vue3](https://v2.vuejs.org/v2/guide/), [vue-router](https://router.vuejs.org/installation.html) and [vue-apollo](https://apollo.vuejs.org/guide-option/setup.html) documentation. Keep in mind, I'm quite new at this so if I made a wrong assumption while writing all of this out, feel free to correct me. 

---
<h2>Installing Vue and Apollo</h2>
---
```
$ npm create vue@latest
Project name: … frontend
...snip...
Scaffolding project in ./frontend...
Done.

$ cd frontend
$ npm install
$ npm run dev
```

For our other components, vue-router and Apollo, in your frontend/ directory, run: 
```
$ npm install vue-router@4
$ npm install --save graphql graphql-tag @apollo/client
$ npm install --save @vue/apollo-option
```

---
<h2>Working with Vue3 and vue-router</h2>
---

As for router.js, the following worked for me
```
import { createRouter, createWebHistory } from 'vue-router'

// All of these include the .vue extension for the SFCs because for me, it wouldn't work otherwise.
// I do this with each SFC that imports another.
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
```

And again, in main.js, make sure to add these lines.
```
...snip...
import router from './router'
...snip...
app.use(router)
...snip...
```

---
<h2>Working with Apollo</h2>
---

Add the following lines to main.js

```
...snip...
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { ApolloProvider } from '@vue/apollo-option'
...snip...

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    cache,
    uri: 'http://localhost:8000/graphql', // Change to your setup
})

const apolloProvider = new ApolloProvider({
    defaultClient: apolloClient,
})

...snip...

app.use(apolloProvider)
```

The rest of the files remain the same as the tutorial, so this should be able to get you up and running and continue to more important uses of your time, like expanding functionality to the site. Hope this helped!