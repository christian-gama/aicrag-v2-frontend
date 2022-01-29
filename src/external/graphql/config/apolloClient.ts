import { ApolloClient, from, InMemoryCache } from '@apollo/client'
import { authLink, errorLink, httpLink } from '../links'

export const apolloClient = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache()
})
