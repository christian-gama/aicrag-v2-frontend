import { MockedProvider } from '@apollo/client/testing'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import FormProvider from '@/context/models/form/form.provider'
import ForgotPasswordForm from './ForgotPasswordForm'

export default {
  title: 'templates/Entry/ForgotPasswordForm',
  component: ForgotPasswordForm,
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
} as ComponentMeta<typeof ForgotPasswordForm>

const Template: ComponentStory<typeof ForgotPasswordForm> = (args) => <ForgotPasswordForm {...args} />

export const Default = Template.bind({})
