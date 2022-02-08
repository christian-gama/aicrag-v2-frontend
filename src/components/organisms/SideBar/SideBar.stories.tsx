import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { AllProviders } from '@/tests/helpers'
import { SideBar as SideBarComponent } from './SideBar'

export default {
  component: SideBarComponent,
  title: 'organisms/Side Bar',
  decorators: [(story) => <AllProviders>{story()}</AllProviders>]
} as ComponentMeta<typeof SideBarComponent>

export const SideBar: ComponentStoryObj<typeof SideBarComponent> = {}
