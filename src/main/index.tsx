import React from 'react'
import ReactDOM from 'react-dom'
import '@/presentation/styles/global.css'
import { Provider } from 'react-redux'
import store from '@/infra/store'
import Form from '@/presentation/components/Form'
import Button from '@/presentation/components/UI/Button'
import Input from '@/presentation/components/UI/Input'
import makeTimerValidator from './factories/validation/makeTimerValidator'

const Element: React.FC = () => {
  return (
    <Form
      name="createTaskForm"
      submitHandler={async () => {
        throw new Error('oe')
      }}
      validation={makeTimerValidator()}
    >
      <Input name="title" />
      <Input name="title" />

      <Button type="submit">Submit</Button>
    </Form>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Element />
  </Provider>,

  document.getElementById('root')
)
