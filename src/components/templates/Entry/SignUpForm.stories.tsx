import { MockedProvider } from '@apollo/client/testing'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import React from 'react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import FormProvider from '@/context/models/form/form.provider'
import sendWelcomeEmailMock from '@/tests/mocks/queries/sendWelcomeEmail.mock'
import signUpMock from '@/tests/mocks/queries/signUp.mock'
import SignUpFormComponent from './SignUpForm'

export default {
  title: 'templates/Entry/Sign Up Form',
  component: SignUpFormComponent,
  decorators: [
    (story: any) => (
      <MockedProvider
        mocks={[signUpMock(), sendWelcomeEmailMock()]}
        addTypename={false}
      >
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
} as ComponentMeta<typeof SignUpFormComponent>

export const SignUpForm: ComponentStoryObj<typeof SignUpFormComponent> = {}
