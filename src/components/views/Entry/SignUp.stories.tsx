import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import { signUpMock, sendWelcomeEmailMock } from '@/tests/mocks/queries'
import { SignUp as SignUpComponent } from './SignUp'

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
