import React from 'react'
import ReactDOM from 'react-dom'
import '@/application/common/stylesheet/global.css'
import { Provider } from 'react-redux'
import store from '@/application/store'
import Alert from '@/presentation/components/UI/Alert'
import Button from '@/presentation/components/UI/Button'
import Popover from '@/presentation/components/UI/Popover'
import CalendarContainer from '@/presentation/containers/Calendar'

const Element: React.FC = () => {
  const [triggerAllComponents, setTriggerAllComponents] = React.useState(false)

  if (triggerAllComponents) {
    return (
      <>
        <Button style={{ color: 'main', mode: 'contained' }}>main</Button>
        <Button style={{ color: 'danger', mode: 'contained' }}>danger</Button>
        <Button style={{ color: 'info', mode: 'contained' }}>info</Button>
        <Button style={{ color: 'light', mode: 'contained' }}>light</Button>
        <Button style={{ color: 'main', mode: 'outlined' }}>main</Button>
        <Button style={{ color: 'danger', mode: 'outlined' }}>danger</Button>
        <Button style={{ color: 'info', mode: 'outlined' }}>info</Button>
        <Button style={{ color: 'light', mode: 'outlined' }}>light</Button>
        <Button>disabled</Button>

        <Alert isOpen mode="cancelOnly" type="danger" message="danger" title="danger" />

        <CalendarContainer previousDate={Date.now()} />

        <Popover message="Popover" isOpen type="success" />
      </>
    )
  }

  return (
    <>
      {!triggerAllComponents && (
        <Button onClick={() => setTriggerAllComponents((prev) => !prev)}>Trigger All Components</Button>
      )}
    </>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Element />
  </Provider>,

  document.getElementById('root')
)
