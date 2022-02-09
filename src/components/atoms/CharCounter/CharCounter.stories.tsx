import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { CharCounter } from './CharCounter'

export default {
  component: CharCounter,
  title: 'atoms/CharCounter',
  args: {
    maxLength: 10,
    value: ''
  }
} as ComponentMeta<typeof CharCounter>

export const Default: ComponentStoryObj<typeof CharCounter> = {}
