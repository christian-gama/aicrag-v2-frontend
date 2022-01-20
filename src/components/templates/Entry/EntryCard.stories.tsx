import { MockedProvider } from '@apollo/client/testing'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import React from 'react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import FormProvider from '@/context/models/form/form.provider'
import EntryCardComponent from './EntryCard'

export default {
  title: 'templates/entry/Entry Card',
  component: EntryCardComponent,
  decorators: [
    (story: any) => (
      <MockedProvider>
        <FormProvider>
          <MemoryRouter>
            <Routes>
              <Route path="/" element={story()} />
            </Routes>
          </MemoryRouter>
        </FormProvider>
      </MockedProvider>
    )
  ]
} as ComponentMeta<typeof EntryCardComponent>

export const EntryCard: ComponentStoryObj<typeof EntryCardComponent> = {}
