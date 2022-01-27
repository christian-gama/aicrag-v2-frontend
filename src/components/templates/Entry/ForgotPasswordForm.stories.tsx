import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import React from 'react'
import { AllProviders } from '@/tests/helpers/renderWithProviders'
import forgotPasswordMock from '@/tests/mocks/queries/forgotPassword.mock'
import sendRecoverPasswordEmailMock from '@/tests/mocks/queries/sendRecoverPasswordEmail'
import ForgotPasswordFormComponent from './ForgotPasswordForm'

export default {
  title: 'templates/Entry/Forgot Password Form',
  component: ForgotPasswordFormComponent,
  decorators: [
    (story) => (
      <AllProviders
        apolloMocks={[forgotPasswordMock(), sendRecoverPasswordEmailMock()]}
      >
        {story()}
      </AllProviders>
    )
  ]
} as ComponentMeta<typeof ForgotPasswordFormComponent>

export const ForgotPasswordForm: ComponentStoryObj<
  typeof ForgotPasswordFormComponent
> = {}
