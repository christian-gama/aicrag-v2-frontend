import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { LoadingSkeleton } from './LoadingSkeleton'

export default {
  component: LoadingSkeleton,
  title: 'atoms/LoadingSkeleton',
  args: {
    width: '75%',
    gap: '2.8rem',
    columns: 3,
    amount: 5
  }
} as ComponentMeta<typeof LoadingSkeleton>

export const Default: ComponentStoryObj<typeof LoadingSkeleton> = {}
