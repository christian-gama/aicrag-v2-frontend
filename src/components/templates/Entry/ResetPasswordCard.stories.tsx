import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import { ResetPasswordCard as ResetPasswordCardComponent } from './ResetPasswordCard'

export default {
  title: 'templates/entry/Reset Password Card',
  component: ResetPasswordCardComponent,
  decorators: [(story) => <AllProviders>{story()}</AllProviders>]
} as ComponentMeta<typeof ResetPasswordCardComponent>

export const ResetPasswordCard: ComponentStoryObj<
  typeof ResetPasswordCardComponent
> = {}
