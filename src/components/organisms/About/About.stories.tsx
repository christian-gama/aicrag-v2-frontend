import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import { About as AboutComponent } from './About'

export default {
  component: AboutComponent,
  title: 'organisms/About',
  args: {
    isOpen: true
  },
  decorators: [(story) => <AllProviders>{story()}</AllProviders>]
} as ComponentMeta<typeof AboutComponent>

export const About: ComponentStoryObj<typeof AboutComponent> = {}
