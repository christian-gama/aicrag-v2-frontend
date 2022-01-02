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
    <FormProvider submitHandler={async () => {}} validator={makeTimerValidator()}>
      <ControlledInput name="hora" />
      <ControlledInput name="minuto" />

      <Button type="submit">Enviar</Button>
    </FormProvider>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Element />
  </Provider>,

  document.getElementById('root')
)
