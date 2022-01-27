import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import React from 'react'
import { AllProviders } from '@/tests/helpers/renderWithProviders'
import forgotPasswordMock from '@/tests/mocks/queries/forgotPassword.mock'
import sendRecoverPasswordEmailMock from '@/tests/mocks/queries/sendRecoverPasswordEmail'
import ForgotPasswordComponent from './ForgotPassword'

export default {
  title: 'views/entry/Forgot Password',
  component: ForgotPasswordComponent,
  decorators: [
    (story) => (
      <AllProviders
        apolloMocks={[forgotPasswordMock(), sendRecoverPasswordEmailMock()]}
      >
        {story()}
      </AllProviders>
    )
  ]
} as ComponentMeta<typeof ForgotPasswordComponent>

export const ForgotPassword: ComponentStoryObj<typeof ForgotPasswordComponent> =
  {}
