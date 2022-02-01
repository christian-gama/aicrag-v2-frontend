import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import { loginMock } from '@/tests/mocks/queries'
import { SignInView as SignInComponent } from './SignInView'

export default {
  title: 'views/Entry/Sign In View',
  component: SignInComponent,
  decorators: [
    (story) => (
      <AllProviders apolloMocks={[loginMock()]}>{story()}</AllProviders>
    )
  ]
} as ComponentMeta<typeof SignInComponent>

export const SignInView: ComponentStoryObj<typeof SignInComponent> = {}
