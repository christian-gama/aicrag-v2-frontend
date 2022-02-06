import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { Button } from '@/components/atoms/Button'
import { makeMockValidation } from '@/tests/mocks'
import { Task } from './Task'

export default {
  component: Task,
  title: 'templates/Task',
  args: {
    submitHandler: async () => {
      return () => {}
    },
    validator: makeMockValidation((field, input) => ''),
    renderButtons: () => (
      <>
        <Button style={{ mode: 'outlined', color: 'danger' }}>Cancelar</Button>

        <Button type="submit">Atualizar</Button>
      </>
    )
  }
} as ComponentMeta<typeof Task>

export const Default: ComponentStoryObj<typeof Task> = {}
