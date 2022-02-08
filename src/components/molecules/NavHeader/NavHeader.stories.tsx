import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import { NavHeader } from './NavHeader'

export default {
  component: NavHeader,
  title: 'molecules/NavHeader',
  args: {
    title: 'Any title'
  },
  decorators: [
    (story) => (
      <div style={{ height: '100vh', padding: '12px' }}>
        <AllProviders>{story()}</AllProviders>
      </div>
    )
  ]
} as ComponentMeta<typeof NavHeader>

export const Default: ComponentStoryObj<typeof NavHeader> = {}
