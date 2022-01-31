import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { Steps } from './Steps'

export default {
  component: Steps,
  args: {
    steps: [
      { label: 'Label 1', check: true },
      { label: 'Label 2', check: false }
    ]
  },
  title: 'atoms/Steps'
} as ComponentMeta<typeof Steps>

export const Default: ComponentStoryObj<typeof Steps> = {}

export const Row: ComponentStoryObj<typeof Steps> = {
  args: {
    direction: 'row'
  }
}
