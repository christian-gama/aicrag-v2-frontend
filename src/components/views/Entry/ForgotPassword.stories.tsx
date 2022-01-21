import { MockedProvider } from '@apollo/client/testing'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import React from 'react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import FormProvider from '@/context/models/form/form.provider'
import forgotPasswordMock from '@/tests/mocks/queries/forgotPassword.mock'
import sendRecoverPasswordEmailMock from '@/tests/mocks/queries/sendRecoverPasswordEmail'
import ForgotPasswordComponent from './ForgotPassword'

export default {
  title: 'views/entry/Forgot Password',
  component: ForgotPasswordComponent,
  decorators: [
    (story) => (
      <MockedProvider
        mocks={[forgotPasswordMock(), sendRecoverPasswordEmailMock()]}
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
} as ComponentMeta<typeof ForgotPasswordComponent>

export const ForgotPassword: ComponentStoryObj<typeof ForgotPasswordComponent> =
  {}
