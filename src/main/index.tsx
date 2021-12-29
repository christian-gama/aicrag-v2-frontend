import React from 'react'
import ReactDOM from 'react-dom'
import '@/presentation/styles/global.css'
import { Provider } from 'react-redux'
import store from '@/infra/store'
import Input from '@/presentation/components/form/components/input/Input'
import Form from '@/presentation/components/form/Form'
import makeTimerValidator from './factories/validation/makeTimerValidator'

const Element: React.FC = () => {
  return (
    <Form name="createTaskForm" submitHandler={async () => {}} validation={makeTimerValidator()}>
      <Input name="title" />
    </Form>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Element />
  </Provider>,

  document.getElementById('root')
)
