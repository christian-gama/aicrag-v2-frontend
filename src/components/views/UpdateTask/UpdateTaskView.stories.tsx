import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import { UpdateTaskView as UpdateTaskViewComponent } from './UpdateTaskView'

export default {
  component: UpdateTaskViewComponent,
  title: 'views/Update Task View',
  decorators: [(story) => <AllProviders>{story()}</AllProviders>]
} as ComponentMeta<typeof UpdateTaskViewComponent>

export const UpdateTaskView: ComponentStoryObj<typeof UpdateTaskViewComponent> =
  {}
