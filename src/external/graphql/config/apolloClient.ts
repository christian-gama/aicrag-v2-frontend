import { ApolloClient, InMemoryCache, from } from '@apollo/client'
import authLink from '../links/authLink'
import authErrorLink from '../links/errorLink'
import httpLink from '../links/httpLink'

const link = from([authErrorLink, authLink, httpLink])

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link
})

export default apolloClient
