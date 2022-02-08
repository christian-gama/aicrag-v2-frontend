import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import { AccountDataView as AccountDataViewComponent } from './AccountDataView'

export default {
  component: AccountDataViewComponent,
  title: 'views/Account Data View',
  decorators: [(story) => <AllProviders>{story()}</AllProviders>]
} as ComponentMeta<typeof AccountDataViewComponent>

export const AccountDataView: ComponentStoryObj<
  typeof AccountDataViewComponent
> = {}
