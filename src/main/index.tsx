import React from 'react'
import ReactDOM from 'react-dom'
import '@/presentation/styles/global.css'
import { Provider, useSelector } from 'react-redux'
import store, { RootState } from '@/infra/store'
import Form from '@/presentation/components/form/Form'
import Input from '@/presentation/components/form/input/Input'
import Button from '@/presentation/components/UI/button/Button'
import Card from '@/presentation/components/UI/card/Card'
import Builder from './builders/validatorBuilder'
import ValidatorComposite from './composites/validatorComposite'

const validation = ValidatorComposite.build([
  ...Builder.field('Email').required().email().build(),
  ...Builder.field('Senha').required().minLength(8).build(),
  ...Builder.field('Confirmar Senha').required().minLength(8).sameAs('Senha').build()
])

const Element: React.FC = () => {
  const isValidatingCreateTask = useSelector<RootState, boolean>((state) => state.createTaskForm.isValidating)
  const isValidatingUpdateTask = useSelector<RootState, boolean>((state) => state.updateTaskForm.isValidating)

  return (
    <div>
      <Card centered>
        <Form
          submitHandler={async () => console.log('My custom submitHandler')}
          validation={validation}
          name="createTaskForm"
        >
          <Input name="Email" validation={validation} type="email" />
          <Input name="Senha" validation={validation} type="password" />
          <Input name="Confirmar Senha" validation={validation} type="password" />

          <Button loading={isValidatingCreateTask} type="submit">
            Submit
          </Button>
        </Form>
      </Card>

      <Card centered>
        <Form
          submitHandler={async () => console.log('My custom submitHandler')}
          validation={validation}
          name="updateTaskForm"
        >
          <Input name="Email" validation={validation} type="email" />
          <Input name="Senha" validation={validation} type="password" />
          <Input name="Confirmar Senha" validation={validation} type="password" />

          <Button loading={isValidatingUpdateTask} type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Element />
  </Provider>,

  document.getElementById('root')
)
