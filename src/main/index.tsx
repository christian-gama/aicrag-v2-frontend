import React from 'react'
import ReactDOM from 'react-dom'
import '@/application/common/stylesheet/global.css'
import { Provider, useDispatch } from 'react-redux'
import { formActions } from '@/application/models/form'
import store from '@/application/store'
import Button from '@/presentation/components/UI/Button'
import ControlledInput from '@/presentation/containers/ControlledInput'
import Form from '@/presentation/containers/Form'

const Element: React.FC = () => {
  const dispatch = useDispatch()
  const { resetForm } = formActions
  return (
    <>
      <Form name="teste" submitHandler={async () => console.log('oie')}>
        <ControlledInput name="hora" type="password" />

        <Button onClick={() => dispatch(resetForm('teste'))}>Reset</Button>
      </Form>

      <Form name="teste2" submitHandler={async () => console.log('oie')}>
        <ControlledInput name="hora" type="password" />
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
