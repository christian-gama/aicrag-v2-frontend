import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { makeAccessTokenStorage } from '@/external/factories/storage/auth'
import { AllProviders } from '@/tests/helpers'
import { mockVariables } from '@/tests/mocks'
import { Header as HeaderComponent } from './Header'

export default {
  component: HeaderComponent,
  title: 'organisms/Header',
  args: {
    pageName: 'Any page name'
  },
  decorators: [
    (story) => {
      const accessTokenStorage = makeAccessTokenStorage()
      accessTokenStorage.set(mockVariables.token)

      return <AllProviders>{story()}</AllProviders>
    }
  ]
} as ComponentMeta<typeof HeaderComponent>

export const Header: ComponentStoryObj<typeof HeaderComponent> = {}
