import React from 'react'
import ReactDOM from 'react-dom'
import '@/application/common/stylesheet/global.css'
import { Provider } from 'react-redux'
import FormProvider from '@/application/models/context/form/FormProvider'
import store from '@/application/store'
import Alert from '@/presentation/components/UI/Alert'
import Button from '@/presentation/components/UI/Button'
import ControlledInput from '@/presentation/containers/ControlledInput'
import makeTimerValidator from './factories/validation/makeTimerValidator'

const Element: React.FC = () => {
  return (
    <FormProvider submitHandler={async () => console.log('oie')} validator={makeTimerValidator()}>
      <div style={{ display: 'flex', gap: '2rem', margin: '1rem' }}>
        <Button onClick={() => {}} style={{ mode: 'outlined', color: 'main' }}>
          Main
        </Button>

        <Button onClick={() => {}} style={{ mode: 'outlined', color: 'danger' }}>
          Danger
        </Button>

        <Button onClick={() => {}} style={{ mode: 'outlined', color: 'light' }}>
          Light
        </Button>

        <Button onClick={() => {}} style={{ mode: 'outlined', color: 'info' }}>
          Info
        </Button>
      </div>

      <div style={{ display: 'flex', gap: '2rem', margin: '1rem' }}>
        <Button onClick={() => {}} style={{ mode: 'contained', color: 'main' }}>
          Main
        </Button>

        <Button onClick={() => {}} style={{ mode: 'contained', color: 'danger' }}>
          Danger
        </Button>

        <Button onClick={() => {}} style={{ mode: 'contained', color: 'light' }}>
          Light
        </Button>

        <Button onClick={() => {}} style={{ mode: 'contained', color: 'info' }}>
          Info
        </Button>
      </div>

      <ControlledInput name="hora" />

      <Alert mode="cancelOnly" message="Teste" title="Testando" type="info" isOpen />
    </FormProvider>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Element />
  </Provider>,

  document.getElementById('root')
)
