import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import FormProvider from '@/context/models/form/form.provider'
import OverlayRoot from '@/tests/helpers/overlayRoot'
import sleep from '@/tests/helpers/sleep'
import sendWelcomeEmailMock from '@/tests/mocks/queries/sendWelcomeEmail.mock'
import signUpMock from '@/tests/mocks/queries/signUp.mock'
import variablesMock from '@/tests/mocks/variables.mock'
import SignUpForm from '../SignUpForm'

const makeSut = (mocks: Array<MockedResponse<Record<string, any>>>) => {
  return render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <FormProvider>
        <MemoryRouter initialEntries={['/entry/sign-in']}>
          <Routes>
            <Route path="/entry/sign-in" element={<SignUpForm />} />
          </Routes>
        </MemoryRouter>
      </FormProvider>
    </MockedProvider>
  )
}

describe('SignUpForm', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  it('should render SignUpForm correctly', () => {
    makeSut([signUpMock()])

    const signInForm = screen.getByTestId('form')

    expect(signInForm).toBeInTheDocument()
  })

  it('should submit the form', async () => {
    makeSut([signUpMock(), sendWelcomeEmailMock()])

    const form = screen.getByTestId('form')
    const inputs = screen.getAllByTestId('base-input')
    userEvent.type(inputs[0], variablesMock.name)
    userEvent.type(inputs[1], variablesMock.email)
    userEvent.type(inputs[2], variablesMock.password)
    userEvent.type(inputs[3], variablesMock.password)

    fireEvent.submit(form)

    await act(async () => {
      await sleep(0)
    })

    await waitFor(() => expect(screen.getByTestId('loading-spinner-icon')).toBeInTheDocument())
  })
})
