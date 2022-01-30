import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import { signUpMock, sendWelcomeEmailMock } from '@/tests/mocks/queries'
import { SignUpView as SignUpComponent } from './SignUpView'

export default {
  title: 'views/Entry/Sign Up View',
  component: SignUpComponent,
  decorators: [
    (story) => (
      <AllProviders apolloMocks={[signUpMock(), sendWelcomeEmailMock()]}>
        {story()}
      </AllProviders>
    )
  ]
} as ComponentMeta<typeof SignUpComponent>

export const SignUpView: ComponentStoryObj<typeof SignUpComponent> = {}
