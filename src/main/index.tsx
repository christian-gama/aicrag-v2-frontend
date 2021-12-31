import React from 'react'
import ReactDOM from 'react-dom'
import '@/application/common/stylesheet/global.css'
import { Provider } from 'react-redux'
import store from '@/application/store'
import ControlledInput from '@/presentation/containers/ControlledInput'
import Form from '@/presentation/containers/Form'

const Element: React.FC = () => {
  return (
    <Form submitHandler={async () => console.log('oie')}>
      <ControlledInput name="hora" type="password" />
    </Form>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Element />
  </Provider>,

  document.getElementById('root')
)
