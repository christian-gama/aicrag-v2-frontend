import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { makeMockValidation } from '@/tests/mocks'
import { Task } from './Task'

export default {
  component: Task,
  title: 'templates/Task',
  args: {
    submitHandler: async () => {
      return () => {}
    },
    validator: makeMockValidation((field, input) => '')
  }
} as ComponentMeta<typeof Task>

export const Default: ComponentStoryObj<typeof Task> = {}
