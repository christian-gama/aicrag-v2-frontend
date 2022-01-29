import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import { signUpMock, sendWelcomeEmailMock } from '@/tests/mocks/queries'
import { SignUpForm as SignUpFormComponent } from './SignUpForm'

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
