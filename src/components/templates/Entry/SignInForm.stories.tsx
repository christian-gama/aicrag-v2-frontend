import { MockedProvider } from '@apollo/client/testing'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import React from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import FormProvider from '@/context/models/form/form.provider'
import loginMock from '@/tests/mocks/queries/login.mock'
import SignInFormComponent from './SignInForm'

export default {
  title: 'templates/Entry/Sign In Form',
  component: SignInFormComponent,
  decorators: [
    (story: any) => (
      <MockedProvider addTypename={false} mocks={[loginMock()]}>
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
} as ComponentMeta<typeof SignInFormComponent>

export const SignInForm: ComponentStoryObj<typeof SignInFormComponent> = {}
