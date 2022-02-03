import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import { Help as HelpComponent } from './Help'

export default {
  component: HelpComponent,
  title: 'organisms/Help',
  args: {
    isOpen: true
  },
  decorators: [(story) => <AllProviders>{story()}</AllProviders>]
} as ComponentMeta<typeof HelpComponent>

export const Help: ComponentStoryObj<typeof HelpComponent> = {}
