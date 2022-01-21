import { MockedProvider } from '@apollo/client/testing'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import React from 'react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import FormProvider from '@/context/models/form/form.provider'
import forgotPasswordMock from '@/tests/mocks/queries/forgotPassword.mock'
import sendRecoverPasswordEmailMock from '@/tests/mocks/queries/sendRecoverPasswordEmail'
import ForgotPasswordFormComponent from './ForgotPasswordForm'

export default {
  title: 'templates/Entry/Forgot Password Form',
  component: ForgotPasswordFormComponent,
  decorators: [
    (story) => (
      <MockedProvider
        mocks={[forgotPasswordMock(), sendRecoverPasswordEmailMock()]}
        addTypename={false}>
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
} as ComponentMeta<typeof ForgotPasswordFormComponent>

export const ForgotPasswordForm: ComponentStoryObj<
  typeof ForgotPasswordFormComponent
> = {}
