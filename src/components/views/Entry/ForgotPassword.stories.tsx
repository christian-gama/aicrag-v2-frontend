import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import {
  forgotPasswordMock,
  sendRecoverPasswordEmailMock
} from '@/tests/mocks/queries'
import { ForgotPassword as ForgotPasswordComponent } from './ForgotPassword'

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
