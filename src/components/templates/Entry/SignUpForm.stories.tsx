import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import React from 'react'
import { AllProviders } from '@/tests/helpers/renderWithProviders'
import sendWelcomeEmailMock from '@/tests/mocks/queries/sendWelcomeEmail.mock'
import signUpMock from '@/tests/mocks/queries/signUp.mock'
import SignUpFormComponent from './SignUpForm'

export default {
  title: 'templates/Entry/Sign Up Form',
  component: SignUpFormComponent,
  decorators: [
    (story) => (
      <AllProviders apolloMocks={[signUpMock(), sendWelcomeEmailMock()]}>
        {story()}
      </AllProviders>
    )
  ]
} as ComponentMeta<typeof SignUpFormComponent>

export const SignUpForm: ComponentStoryObj<typeof SignUpFormComponent> = {}
