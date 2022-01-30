import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import {
  forgotPasswordMock,
  sendRecoverPasswordEmailMock
} from '@/tests/mocks/queries'
import { ForgotPasswordView as ForgotPasswordComponent } from './ForgotPasswordView'

export default {
  title: 'views/entry/Forgot Password View',
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

export const ForgotPasswordView: ComponentStoryObj<
  typeof ForgotPasswordComponent
> = {}
