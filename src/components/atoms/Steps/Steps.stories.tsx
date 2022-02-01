import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { Steps } from './Steps'

export default {
  component: Steps,
  argTypes: {
    direction: {
      control: {
        type: 'select',
        options: ['column', 'row']
      }
    }
  },
  args: {
    steps: [
      { label: 'Label 1', check: false },
      { label: 'Label 2', check: false },
      { label: 'Label 3', check: false }
    ]
  },
  title: 'atoms/Steps'
} as ComponentMeta<typeof Steps>

export const Default: ComponentStoryObj<typeof Steps> = {}

export const Playground: ComponentStoryObj<typeof Steps> = {
  args: {
    direction: 'column',
    gap: '6.8rem'
  }
}

export const Column: ComponentStoryObj<typeof Steps> = {
  args: {
    direction: 'column'
  }
}

export const Row: ComponentStoryObj<typeof Steps> = {
  args: {
    direction: 'row'
  }
}
