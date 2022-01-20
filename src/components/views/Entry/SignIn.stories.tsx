import { MockedProvider } from '@apollo/client/testing'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import React from 'react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import FormProvider from '@/context/models/form/form.provider'
import loginMock from '@/tests/mocks/queries/login.mock'
import SignInComponent from './SignIn'

export default {
  title: 'views/Entry/Sign In',
  component: SignInComponent,
  decorators: [
    (story) => (
      <MockedProvider mocks={[loginMock()]} addTypename={false}>
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
} as ComponentMeta<typeof SignInComponent>

export const SignIn: ComponentStoryObj<typeof SignInComponent> = {}
