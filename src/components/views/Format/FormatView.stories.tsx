import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import { FormatView as FormatViewComponent } from './FormatView'

export default {
  component: FormatViewComponent,
  title: 'views/Format View',
  decorators: [(story) => <AllProviders>{story()}</AllProviders>]
} as ComponentMeta<typeof FormatViewComponent>

export const FormatView: ComponentStoryObj<
  typeof FormatViewComponent
> = {}
