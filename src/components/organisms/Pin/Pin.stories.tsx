import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import { Pin } from './Pin'

export default {
  component: Pin,
  title: 'organisms/Pin',
  args: {
    isPage: false,
    isOpen: true
  },
  decorators: [
    (story) => (
      <div
        style={{
          backgroundColor: '#555',
          width: '100vw',
          height: '100vh',
          padding: '1.2rem'
        }}
      >
        <AllProviders>{story()}</AllProviders>
      </div>
    )
  ]
} as ComponentMeta<typeof Pin>

export const Default: ComponentStoryObj<typeof Pin> = {}
