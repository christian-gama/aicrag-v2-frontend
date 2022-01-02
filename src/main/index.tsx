import React from 'react'
import ReactDOM from 'react-dom'
import '@/application/common/stylesheet/global.css'
import { Provider } from 'react-redux'
import FormProvider from '@/application/models/context/form/FormProvider'
import store from '@/application/store'
import Button from '@/presentation/components/UI/Button'
import ControlledInput from '@/presentation/containers/ControlledInput'
import makeTimerValidator from './factories/validation/makeTimerValidator'

const Element: React.FC = () => {
  return (
    <div>
      <FormProvider submitHandler={async () => console.log('oie')} validator={makeTimerValidator()}>
        <Button onClick={() => {}} style={{ mode: 'contained', color: 'info' }} type="submit">
          Info
        </Button>

        <ControlledInput name="hora" defaultValue="teste" />

        <ControlledInput name="minuto" defaultValue="teste" />
      </FormProvider>

      <FormProvider submitHandler={async () => console.log('opa')} validator={makeTimerValidator()}>
        <Button onClick={() => {}} style={{ mode: 'contained', color: 'info' }} type="submit">
          Info
        </Button>

        <ControlledInput name="minuto" defaultValue="testando" />
      </FormProvider>
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Element />
  </Provider>,

  document.getElementById('root')
)
