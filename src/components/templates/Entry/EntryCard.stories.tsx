import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import React from 'react'
import { AllProviders } from '@/tests/helpers/renderWithProviders'
import EntryCardComponent from './EntryCard'

export default {
  title: 'templates/entry/Entry Card',
  component: EntryCardComponent,
  decorators: [(story) => <AllProviders>{story()}</AllProviders>]
} as ComponentMeta<typeof EntryCardComponent>

export const EntryCard: ComponentStoryObj<typeof EntryCardComponent> = {}
