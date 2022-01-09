import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom'
import '@/components/_settings/global.css'
import { Provider, useDispatch } from 'react-redux'
import { BrowserRouter, Routes } from 'react-router-dom'
import { calendarActions } from '@/context/models/calendar'
import store, { AppDispatch } from '@/context/store'
import Button from '@/components/atoms/Button'
import Calendar from '@/components/organisms/Calendar'
import apolloClient from './graphql/config/apolloClient'
import WelcomeRoute from './router/WelcomeRoute'

const Element = () => {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div>
      <Button onClick={() => dispatch(calendarActions.openCalendar())}>Calendário</Button>
      <Calendar previousDate={Date.now()} />
    </div>
  )
}

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>{WelcomeRoute}</Routes>
        <Element />
      </Provider>
    </BrowserRouter>
  </ApolloProvider>,

  document.getElementById('root')
)
