import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import { NoContent as NoContentComponent } from './NoContent'

export default {
  component: NoContentComponent,
  title: 'molecules/No Content',
  decorators: [(story) => <AllProviders>{story()}</AllProviders>]
} as ComponentMeta<typeof NoContentComponent>

export const NoContent: ComponentStoryObj<typeof NoContentComponent> = {}
