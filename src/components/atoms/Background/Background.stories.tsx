import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import Background from './Background'

export default {
  title: 'atoms/Background',
  component: Background
} as ComponentMeta<typeof Background>

export const Default: ComponentStoryObj<typeof Background> = {}

export const Gradient: ComponentStoryObj<typeof Background> = {
  args: {
    gradient: true
  }
}
