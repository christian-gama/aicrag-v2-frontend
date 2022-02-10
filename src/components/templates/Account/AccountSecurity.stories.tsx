import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import { AccountSecurity as AccountSecurityComponent } from './AccountSecurity'

export default {
  component: AccountSecurityComponent,
  title: 'templates/Account Security',
  decorators: [(story) => <AllProviders>{story()}</AllProviders>]
} as ComponentMeta<typeof AccountSecurityComponent>

export const AccountSecurity: ComponentStoryObj<
  typeof AccountSecurityComponent
> = {}
