import React from 'react'
import ReactDOM from 'react-dom'
import '@/application/common/stylesheet/global.css'
import { Provider, useDispatch } from 'react-redux'
import FormProvider from '@/application/models/context/form/FormProvider'
import { calendarActions } from '@/application/models/redux/calendar'
import store, { AppDispatch } from '@/application/store'
import Alert from '@/presentation/components/UI/Alert'
import Button from '@/presentation/components/UI/Button'
import Card from '@/presentation/components/UI/Card'
import Popover from '@/presentation/components/UI/Popover'
import ProgressBar from '@/presentation/components/UI/ProgressBar'
import CalendarContainer from '@/presentation/containers/Calendar/CalendarContainer'
import ControlledInput from '@/presentation/containers/ControlledInput'
import makeTimerValidator from './factories/validation/makeTimerValidator'

const Element: React.FC = () => {
  const [triggerAllComponents, setTriggerAllComponents] = React.useState(false)
  const dispatch = useDispatch<AppDispatch>()

  if (triggerAllComponents) {
    return (
      <>
        <Button style={{ color: 'cyan', mode: 'contained' }}>cyan</Button>
        <Button style={{ color: 'danger', mode: 'contained' }}>danger</Button>
        <Button style={{ color: 'info', mode: 'contained' }}>info</Button>
        <Button style={{ color: 'light', mode: 'contained' }}>light</Button>
        <Button style={{ color: 'cyan', mode: 'outlined' }}>cyan</Button>
        <Button style={{ color: 'danger', mode: 'outlined' }}>danger</Button>
        <Button style={{ color: 'info', mode: 'outlined' }}>info</Button>
        <Button style={{ color: 'light', mode: 'outlined' }}>light</Button>
        <Button disabled>disabled</Button>
        <Button loading>loading</Button>

        <CalendarContainer previousDate={Date.now()} />

        <Alert isOpen mode="cancelOnly" type="danger" message="danger" title="danger" />

        <Popover message="Popover" isOpen type="info" duration={10} />

        <Card>
          <div>Something</div>
        </Card>

        <FormProvider submitHandler={async () => {}} validator={makeTimerValidator()}>
          <ControlledInput name="hora" />
        </FormProvider>
      </>
    )
  }

  return (
    <>
      {false && !triggerAllComponents && (
        <Button
          onClick={() => {
            setTriggerAllComponents((prev) => !prev)
            dispatch(calendarActions.openCalendar())
          }}
        >
          Trigger All Components
        </Button>
      )}

      <ProgressBar loading />
    </>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Element />
  </Provider>,

  document.getElementById('root')
)
