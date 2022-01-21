import { MockedResponse, MockedProvider } from '@apollo/client/testing'
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import FormProvider from '@/context/models/form/form.provider'
import OverlayRoot from '@/tests/helpers/overlayRoot'
import sleep from '@/tests/helpers/sleep'
import forgotPasswordMock from '@/tests/mocks/queries/forgotPassword.mock'
import loginMock from '@/tests/mocks/queries/login.mock'
import variablesMock from '@/tests/mocks/variables.mock'
import ForgotPasswordForm from '../ForgotPasswordForm'

const makeSut = (mocks: Array<MockedResponse<Record<string, any>>>) => {
  return render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <FormProvider>
        <MemoryRouter initialEntries={['/entry/forgot-password']}>
          <Routes>
            <Route
              path="/entry/forgot-password"
              element={<ForgotPasswordForm />}
            />
          </Routes>
        </MemoryRouter>
      </FormProvider>
    </MockedProvider>
  )
}

describe('ForgotPasswordMock', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  it('should render ForgotPasswordForm correctly', () => {
    makeSut([forgotPasswordMock()])

    const forgotPasswordForm = screen.getByTestId('form')

    expect(forgotPasswordForm).toBeInTheDocument()
  })

  it('should submit the form', async () => {
    makeSut([loginMock()])

    const form = screen.getByTestId('form')
    const inputs = screen.getAllByTestId('base-input')
    userEvent.type(inputs[0], variablesMock.email)

    fireEvent.submit(form)

    await act(async () => {
      await sleep()
    })

    expect(form).toBeInTheDocument()
  })
})
