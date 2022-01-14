import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client'
import authLink from '../links/authLink'
import authErrorLink from '../links/errorLink'

const link = from([authErrorLink, authLink, new HttpLink({ uri: import.meta.env.VITE_API_URL })])

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link
})

export default apolloClient
