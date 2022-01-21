import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import ProgressBarComponent from './ProgressBar'

export default {
  title: 'atoms/Progress Bar',
  component: ProgressBarComponent,
  args: {
    loading: true
  }
} as ComponentMeta<typeof ProgressBarComponent>

export const ProgressBar: ComponentStoryObj<typeof ProgressBarComponent> = {}
