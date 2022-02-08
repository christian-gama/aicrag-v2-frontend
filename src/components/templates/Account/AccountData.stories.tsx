import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import { AccountData as AccountDataComponent } from './AccountData'

export default {
  component: AccountDataComponent,
  title: 'templates/Account Data',
  decorators: [(story) => <AllProviders>{story()}</AllProviders>]
} as ComponentMeta<typeof AccountDataComponent>

export const AccountData: ComponentStoryObj<typeof AccountDataComponent> = {}
