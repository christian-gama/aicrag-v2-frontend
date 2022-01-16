import { MockedProvider } from '@apollo/client/testing'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import FormProvider from '@/context/models/form/form.provider'
import EntryCard from './EntryCard'

export default {
  title: 'templates/Entry/EntryCard',
  component: EntryCard,
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
} as ComponentMeta<typeof EntryCard>

const Template: ComponentStory<typeof EntryCard> = (args) => <EntryCard {...args} />

export const Default = Template.bind({})
