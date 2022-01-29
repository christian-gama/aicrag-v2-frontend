import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import {
  verifyResetPasswordTokenMock,
  resetPasswordMock
} from '@/tests/mocks/queries'
import { ResetPasswordForm as ResetPasswordFormComponent } from './ResetPasswordForm'

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
