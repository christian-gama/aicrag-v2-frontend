import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import React from 'react'
import { AllProviders } from '@/tests/helpers/renderWithProviders'
import PasswordCardComponent from './PasswordCard'

export default {
  title: 'templates/entry/Password Card',
  component: PasswordCardComponent,
  decorators: [(story) => <AllProviders>{story()}</AllProviders>]
} as ComponentMeta<typeof PasswordCardComponent>

export const PasswordCard: ComponentStoryObj<typeof PasswordCardComponent> = {}
