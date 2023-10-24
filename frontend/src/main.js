
import { createApp } from 'vue'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { ApolloProvider } from '@vue/apollo-option'
import App from './App.vue'
import router from './router'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    cache,
    uri: 'http://localhost:8000/graphql', // Change to your setup
})

const apolloProvider = new ApolloProvider({
    defaultClient: apolloClient,
})

const app = createApp(App)

app.use(router)
app.use(apolloProvider)

app.mount('#app')
