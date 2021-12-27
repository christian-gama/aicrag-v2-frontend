import React from 'react'
import ReactDOM from 'react-dom'
import '@/presentation/styles/global.css'
import { Provider, useDispatch } from 'react-redux'
import store, { AppDispatch } from '@/infra/store'
import { openCalendar } from '@/infra/store/calendar'
import Calendar from '@/presentation/components/calendar/Calendar'
import Button from '@/presentation/components/UI/button/Button'

const Element: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <>
      <Button onClick={() => dispatch(openCalendar())}>Abrir modal</Button>

      <Calendar />
    </>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Element />
  </Provider>,
  document.getElementById('root')
)
