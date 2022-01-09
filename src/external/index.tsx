import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom'
import '@/application/common/stylesheet/global.css'
import { Provider, useDispatch } from 'react-redux'
import { BrowserRouter, Routes } from 'react-router-dom'
import Calendar from '@/components/molecules/Calendar'
import { calendarActions } from '@/application/models/redux/calendar'
import store, { AppDispatch } from '@/application/store'
import Button from '@/presentation/components/UI/Button'
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
