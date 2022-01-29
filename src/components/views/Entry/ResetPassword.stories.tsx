import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import React from 'react'
import { AllProviders } from '@/tests/helpers/renderWithProviders'
import resetPasswordMock from '@/tests/mocks/queries/resetPassword.mock'
import verifyResetPasswordTokenMock from '@/tests/mocks/queries/verifyResetPasswordToken.mock'
import ResetPasswordComponent from './ResetPassword'

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
