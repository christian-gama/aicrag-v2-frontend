import { MockedProvider } from '@apollo/client/testing'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import React from 'react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import FormProvider from '@/context/models/form/form.provider'
import sleep from '@/tests/helpers/sleep'
import sendWelcomeEmailMock from '@/tests/mocks/queries/sendWelcomeEmail.mock'
import signUpMock from '@/tests/mocks/queries/signUp.mock'
import variablesMock from '@/tests/mocks/variables.mock'
import SignUpForm from './SignUpForm'

export default {
  title: 'templates/Entry/SignUpForm',
  component: SignUpForm,
  decorators: [
    (story: any) => (
      <MockedProvider mocks={[signUpMock(), sendWelcomeEmailMock()]} addTypename={false}>
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
} as ComponentMeta<typeof SignUpForm>

export const Default: ComponentStoryObj<typeof SignUpForm> = {}

export const WithError: ComponentStoryObj<typeof SignUpForm> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const name = canvas.getAllByTestId('base-input')[0]
    const email = canvas.getAllByTestId('base-input')[1]
    const password = canvas.getAllByTestId('base-input')[2]
    const passwordConfirmation = canvas.getAllByTestId('base-input')[3]

    await userEvent.click(name)
    await userEvent.click(email)
    await userEvent.click(password)
    await userEvent.click(passwordConfirmation)

    await userEvent.click(canvas.getByTestId('submit-button'))
  }
}

export const WithSuccess: ComponentStoryObj<typeof SignUpForm> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const name = canvas.getAllByTestId('base-input')[0]
    const email = canvas.getAllByTestId('base-input')[1]
    const password = canvas.getAllByTestId('base-input')[2]
    const passwordConfirmation = canvas.getAllByTestId('base-input')[3]

    await userEvent.type(name, variablesMock.name)
    await userEvent.type(email, variablesMock.email)
    await userEvent.type(password, variablesMock.password)
    await userEvent.type(passwordConfirmation, variablesMock.passwordConfirmation)

    await sleep()

    await userEvent.click(canvas.getByTestId('submit-button'))
  }
}
