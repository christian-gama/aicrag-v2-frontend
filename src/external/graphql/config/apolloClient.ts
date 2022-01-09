import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client'
import authLink from '../links/authLink'

const link = from([authLink, new HttpLink({ uri: 'http://localhost:4000/graphql' })])

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link
})

export default apolloClient
