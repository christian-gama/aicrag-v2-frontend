import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import {
  forgotPasswordMock,
  sendRecoverPasswordEmailMock
} from '@/tests/mocks/queries'
import { ForgotPasswordForm as ForgotPasswordFormComponent } from './ForgotPasswordForm'

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
