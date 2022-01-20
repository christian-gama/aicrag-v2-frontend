import { MockedProvider } from '@apollo/client/testing'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import React from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import FormProvider from '@/context/models/form/form.provider'
import loginMock from '@/tests/mocks/queries/login.mock'
import variablesMock from '@/tests/mocks/variables.mock'
import SignInForm from './SignInForm'

export default {
  title: 'templates/Entry/SignInForm',
  component: SignInForm,
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
} as ComponentMeta<typeof SignInForm>

export const Default: ComponentStoryObj<typeof SignInForm> = {}

export const WithError: ComponentStoryObj<typeof SignInForm> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const email = canvas.getAllByTestId('base-input')[0]
    const password = canvas.getAllByTestId('base-input')[1]

    await userEvent.click(email)
    await userEvent.click(password)
    await userEvent.click(canvas.getByTestId('submit-button'))
  }
}

export const WithSuccess: ComponentStoryObj<typeof SignInForm> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const email = canvas.getAllByTestId('base-input')[0]
    const password = canvas.getAllByTestId('base-input')[1]

    await userEvent.type(email, variablesMock.email)
    await userEvent.type(password, variablesMock.password)

    await userEvent.click(canvas.getByTestId('submit-button'))
  }
}
