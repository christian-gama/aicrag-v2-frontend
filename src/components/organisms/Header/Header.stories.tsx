import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { Header as HeaderComponent } from './Header'

export default {
  component: HeaderComponent,
  title: 'organisms/Header'
} as ComponentMeta<typeof HeaderComponent>

export const Header: ComponentStoryObj<typeof HeaderComponent> = {}
