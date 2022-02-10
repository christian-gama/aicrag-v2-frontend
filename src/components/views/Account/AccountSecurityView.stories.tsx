import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import { AccountSecurityView as AccountSecurityViewComponent } from './AccountSecurityView'

export default {
  component: AccountSecurityViewComponent,
  title: 'views/Account Security View',
  decorators: [(story) => <AllProviders>{story()}</AllProviders>]
} as ComponentMeta<typeof AccountSecurityViewComponent>

export const AccountSecurityView: ComponentStoryObj<
  typeof AccountSecurityViewComponent
> = {}
