import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import {
  verifyResetPasswordTokenMock,
  resetPasswordMock
} from '@/tests/mocks/queries'
import { ResetPasswordView as ResetPasswordComponent } from './ResetPasswordView'

export default {
  title: 'views/entry/Reset Password View',
  component: ResetPasswordComponent,
  decorators: [
    (story) => (
      <AllProviders
        apolloMocks={[verifyResetPasswordTokenMock(), resetPasswordMock()]}
      >
        {story()}
      </AllProviders>
    )
  ]
} as ComponentMeta<typeof ResetPasswordComponent>

export const ResetPasswordView: ComponentStoryObj<
  typeof ResetPasswordComponent
> = {}
