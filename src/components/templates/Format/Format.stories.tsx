import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import { Format as FormatComponent } from './Format'

export default {
  component: FormatComponent,
  title: 'templates/Format',
  decorators: [(story) => <AllProviders>{story()}</AllProviders>]
} as ComponentMeta<typeof FormatComponent>

export const Format: ComponentStoryObj<typeof FormatComponent> = {}
