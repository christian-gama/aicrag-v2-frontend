import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import { ForgotPasswordCard as ForgotPasswordCardComponent } from './ForgotPasswordCard'

export default {
  title: 'templates/entry/Forgot Password Card',
  component: ForgotPasswordCardComponent,
  decorators: [(story) => <AllProviders>{story()}</AllProviders>]
} as ComponentMeta<typeof ForgotPasswordCardComponent>

export const ForgotPasswordCard: ComponentStoryObj<
  typeof ForgotPasswordCardComponent
> = {}
