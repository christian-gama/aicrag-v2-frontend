import { MockedProvider } from '@apollo/client/testing'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import FormProvider from '@/context/models/form/form.provider'
import SignUp from './SignUp'

export default {
  title: 'views/Entry/SignUp',
  component: SignUp,
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
} as ComponentMeta<typeof SignUp>

const Template: ComponentStory<typeof SignUp> = (args) => <SignUp {...args} />

export const Default = Template.bind({})
