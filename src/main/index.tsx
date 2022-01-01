import React from 'react'
import ReactDOM from 'react-dom'
import '@/application/common/stylesheet/global.css'
import { Provider, useDispatch } from 'react-redux'
import { formActions } from '@/application/models/form'
import store from '@/application/store'
import Alert from '@/presentation/components/UI/Alert'
import Button from '@/presentation/components/UI/Button'
import Form from '@/presentation/containers/Form'
import makeTimerValidator from './factories/validation/makeTimerValidator'

const Element: React.FC = () => {
  const dispatch = useDispatch()
  const { resetForm } = formActions
  return (
    <>
      <Form name="teste" submitHandler={async () => console.log('oie')} validation={makeTimerValidator()}>
        <div style={{ display: 'flex', gap: '2rem', margin: '1rem' }}>
          <Button onClick={() => dispatch(resetForm('teste'))} style={{ mode: 'outlined', color: 'main' }}>
            Main
          </Button>

          <Button onClick={() => dispatch(resetForm('teste'))} style={{ mode: 'outlined', color: 'danger' }}>
            Danger
          </Button>

          <Button onClick={() => dispatch(resetForm('teste'))} style={{ mode: 'outlined', color: 'light' }}>
            Light
          </Button>

          <Button onClick={() => dispatch(resetForm('teste'))} style={{ mode: 'outlined', color: 'info' }}>
            Info
          </Button>
        </div>

        <div style={{ display: 'flex', gap: '2rem', margin: '1rem' }}>
          <Button onClick={() => dispatch(resetForm('teste'))} style={{ mode: 'contained', color: 'main' }}>
            Main
          </Button>

          <Button onClick={() => dispatch(resetForm('teste'))} style={{ mode: 'contained', color: 'danger' }}>
            Danger
          </Button>

          <Button onClick={() => dispatch(resetForm('teste'))} style={{ mode: 'contained', color: 'light' }}>
            Light
          </Button>

          <Button onClick={() => dispatch(resetForm('teste'))} style={{ mode: 'contained', color: 'info' }}>
            Info
          </Button>
        </div>

        <Alert mode="cancelOnly" message="Teste" title="Testando" type="info" isOpen />
      </Form>
    </>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Element />
  </Provider>,

  document.getElementById('root')
)
