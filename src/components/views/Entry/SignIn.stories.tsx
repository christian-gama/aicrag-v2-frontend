import { MockedProvider } from '@apollo/client/testing'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import FormProvider from '@/context/models/form/form.provider'
import SignIn from './SignIn'

export default {
  title: 'views/Entry/SignIn',
  component: SignIn,
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
} as ComponentMeta<typeof SignIn>

const Template: ComponentStory<typeof SignIn> = (args) => <SignIn {...args} />

export const Default = Template.bind({})
