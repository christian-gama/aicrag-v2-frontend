import React from 'react'
import ReactDOM from 'react-dom'
import '@/presentation/styles/global.css'
import { Provider, useDispatch } from 'react-redux'
import store, { AppDispatch } from '@/infra/store'
import { openModal } from '@/infra/store/modal'
import Calendar from '@/presentation/components/calendar/Calendar'
import Button from '@/presentation/components/UI/button/Button'
import Modal from '@/presentation/components/UI/modal/Modal'

const Element: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <>
      <Button onClick={() => dispatch(openModal())}>Abrir modal</Button>

      <Modal>
        <Calendar />
      </Modal>
    </>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Element />
  </Provider>,
  document.getElementById('root')
)
