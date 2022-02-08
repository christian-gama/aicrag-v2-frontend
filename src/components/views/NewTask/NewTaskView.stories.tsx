import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import { NewTaskView as NewTaskViewComponent } from './NewTaskView'

export default {
  component: NewTaskViewComponent,
  title: 'views/New Task View',
  decorators: [(story) => <AllProviders>{story()}</AllProviders>]
} as ComponentMeta<typeof NewTaskViewComponent>

export const NewTaskView: ComponentStoryObj<typeof NewTaskViewComponent> = {}
