import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import React from 'react'
import { AllProviders } from '@/tests/helpers/renderWithProviders'
import resetPasswordMock from '@/tests/mocks/queries/resetPassword.mock'
import verifyResetPasswordTokenMock from '@/tests/mocks/queries/verifyResetPasswordToken.mock'
import ResetPasswordFormComponent from './ResetPasswordForm'

export default {
  title: 'templates/Entry/Reset Password Form',
  component: ResetPasswordFormComponent,
  decorators: [
    (story) => (
      <AllProviders
        apolloMocks={[verifyResetPasswordTokenMock(), resetPasswordMock()]}
      >
        {story()}
      </AllProviders>
    )
  ]
} as ComponentMeta<typeof ResetPasswordFormComponent>

export const ResetPasswordForm: ComponentStoryObj<
  typeof ResetPasswordFormComponent
> = {}
