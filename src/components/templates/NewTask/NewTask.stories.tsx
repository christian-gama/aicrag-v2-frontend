import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { NewTask } from './NewTask'

export default {
  component: NewTask,
  title: 'NewTask'
} as ComponentMeta<typeof NewTask>

export const Default: ComponentStoryObj<typeof NewTask> = {}
