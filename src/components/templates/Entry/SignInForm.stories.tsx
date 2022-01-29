import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import { loginMock } from '@/tests/mocks/queries'
import { SignInForm as SignInFormComponent } from './SignInForm'

export default {
  title: 'templates/Entry/Sign In Form',
  component: SignInFormComponent,
  decorators: [
    (story) => (
      <AllProviders apolloMocks={[loginMock()]}>{story()}</AllProviders>
    )
  ]
} as ComponentMeta<typeof SignInFormComponent>

export const SignInForm: ComponentStoryObj<typeof SignInFormComponent> = {}
