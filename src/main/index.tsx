import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import '@/application/common/stylesheet/global.css'
import { Provider } from 'react-redux'
import store from '@/application/store'
import Button from '@/presentation/components/UI/Button'
import Popover from '@/presentation/components/UI/Popover'

const Element: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setIsOpen((prev) => !prev)}>Open Popover</Button>
      <Popover type="info" message={'Campo email inválido: o email deve conter um @'} isOpen={isOpen} />
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Element />
  </Provider>,

  document.getElementById('root')
)
