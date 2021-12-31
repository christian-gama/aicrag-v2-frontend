import React from 'react'
import ReactDOM from 'react-dom'
import '@/application/common/stylesheet/global.css'
import { Provider } from 'react-redux'
import { calendarActions } from '@/application/models/calendar'
import store from '@/application/store'
import Button from '@/presentation/components/UI/Button'
import Calendar from '@/presentation/containers/Calendar'

const Element: React.FC = () => {
  return (
    <>
      <Button onClick={() => store.dispatch(calendarActions.openCalendar())}>Open Calendar</Button>
      <Calendar previousDate={Date.now()} />
    </>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Element />
  </Provider>,

  document.getElementById('root')
)
