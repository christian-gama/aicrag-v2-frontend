import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom'
import '@/components/_settings/global.css'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes } from 'react-router-dom'
import store from '@/context/store'
import apolloClient from './graphql/config/apolloClient'
import WelcomeRoute from './router/WelcomeRoute'

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>{WelcomeRoute}</Routes>
      </Provider>
    </BrowserRouter>
  </ApolloProvider>,

  document.getElementById('root')
)
