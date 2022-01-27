import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import React from 'react'
import { AllProviders } from '@/tests/helpers/renderWithProviders'
import loginMock from '@/tests/mocks/queries/login.mock'
import SignInComponent from './SignIn'

export default {
  title: 'views/Entry/Sign In',
  component: SignInComponent,
  decorators: [
    (story) => (
      <AllProviders apolloMocks={[loginMock()]}>{story()}</AllProviders>
    )
  ]
} as ComponentMeta<typeof SignInComponent>

export const SignIn: ComponentStoryObj<typeof SignInComponent> = {}
