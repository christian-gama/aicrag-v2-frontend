import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom'
import '@/components/_settings/global.css'
import { Provider } from 'react-redux'
import store from '@/context/store'
import App from './App'
import apolloClient from './graphql/config/apolloClient'

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,

  document.getElementById('root')
)
