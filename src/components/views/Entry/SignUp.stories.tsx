import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import React from 'react'
import { AllProviders } from '@/tests/helpers/renderWithProviders'
import sendWelcomeEmailMock from '@/tests/mocks/queries/sendWelcomeEmail.mock'
import signUpMock from '@/tests/mocks/queries/signUp.mock'
import SignUpComponent from './SignUp'

export default {
  title: 'views/Entry/Sign Up',
  component: SignUpComponent,
  decorators: [
    (story) => (
      <AllProviders apolloMocks={[signUpMock(), sendWelcomeEmailMock()]}>
        {story()}
      </AllProviders>
    )
  ]
} as ComponentMeta<typeof SignUpComponent>

export const SignUp: ComponentStoryObj<typeof SignUpComponent> = {}
