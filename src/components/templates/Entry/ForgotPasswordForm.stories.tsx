import { MockedProvider } from '@apollo/client/testing'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { screen, userEvent, fireEvent, within } from '@storybook/testing-library'
import React from 'react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import FormProvider from '@/context/models/form/form.provider'
import sleep from '@/tests/helpers/sleep'
import forgotPasswordMock from '@/tests/mocks/queries/forgotPassword.mock'
import sendRecoverPasswordEmailMock from '@/tests/mocks/queries/sendRecoverPasswordEmail'
import variablesMock from '@/tests/mocks/variables.mock'
import ForgotPasswordForm from './ForgotPasswordForm'

export default {
  title: 'templates/Entry/ForgotPasswordForm',
  component: ForgotPasswordForm,
  decorators: [
    (story) => (
      <MockedProvider mocks={[forgotPasswordMock(), sendRecoverPasswordEmailMock()]} addTypename={false}>
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

export const Default: ComponentStoryObj<typeof ForgotPasswordForm> = {}

export const WithError: ComponentStoryObj<typeof ForgotPasswordForm> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const email = canvas.getAllByTestId('base-input')[0]

    await userEvent.click(email)

    fireEvent.submit(screen.getByTestId('form'))
  }
}

export const WithSuccess: ComponentStoryObj<typeof ForgotPasswordForm> = {
  play: async ({ canvasElement }) => {
    await sleep()
    const canvas = within(canvasElement)

    const email = canvas.getAllByTestId('base-input')[0]
    await userEvent.type(email, variablesMock.email)

    fireEvent.submit(canvas.getByTestId('form'))
  }
}
