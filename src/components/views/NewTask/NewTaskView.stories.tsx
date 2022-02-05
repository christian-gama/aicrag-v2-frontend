import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { NewTaskView } from './NewTaskView'

export default {
  component: NewTaskView,
  title: 'NewTaskView'
} as ComponentMeta<typeof NewTaskView>

export const Default: ComponentStoryObj<typeof NewTaskView> = {}
