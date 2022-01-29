import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import {
  verifyResetPasswordTokenMock,
  resetPasswordMock
} from '@/tests/mocks/queries'
import { ResetPassword as ResetPasswordComponent } from './ResetPassword'

export default {
  title: 'views/entry/Reset Password',
  component: ResetPasswordComponent,
  decorators: [
    (story) => (
      <AllProviders
        apolloMocks={[verifyResetPasswordTokenMock(), resetPasswordMock()]}
      >
        {story()}
      </AllProviders>
    )
  ]
} as ComponentMeta<typeof ResetPasswordComponent>

export const ResetPassword: ComponentStoryObj<typeof ResetPasswordComponent> =
  {}
