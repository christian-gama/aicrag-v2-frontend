import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { Pin } from './Pin'

export default {
  component: Pin,
  title: 'Pin'
} as ComponentMeta<typeof Pin>

export const Default: ComponentStoryObj<typeof Pin> = {}
