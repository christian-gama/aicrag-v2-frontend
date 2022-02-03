import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { Help as HelpComponent } from './Help'

export default {
  component: HelpComponent,
  title: 'organisms/Help',
  args: {
    isOpen: true
  }
} as ComponentMeta<typeof HelpComponent>

export const Help: ComponentStoryObj<typeof HelpComponent> = {}
