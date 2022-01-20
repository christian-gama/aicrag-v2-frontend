import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import FormProvider from '@/context/models/form/form.provider'
import OverlayRoot from '@/tests/helpers/overlayRoot'
import sleep from '@/tests/helpers/sleep'
import loginMock from '@/tests/mocks/queries/login.mock'
import variablesMock from '@/tests/mocks/variables.mock'
import SignInForm from '../SignInForm'

const makeSut = (mocks: Array<MockedResponse<Record<string, any>>>) => {
  return render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <FormProvider>
        <MemoryRouter initialEntries={['/entry/sign-in']}>
          <Routes>
            <Route path="/entry/sign-in" element={<SignInForm />} />
          </Routes>
        </MemoryRouter>
      </FormProvider>
    </MockedProvider>
  )
}

describe('SignInForm', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  it('should render SignInForm correctly', () => {
    makeSut([loginMock()])

    const signInForm = screen.getByTestId('form')

    expect(signInForm).toBeInTheDocument()
  })

  it('should submit the form', async () => {
    makeSut([loginMock()])

    const form = screen.getByTestId('form')
    const inputs = screen.getAllByTestId('base-input')
    userEvent.type(inputs[0], variablesMock.email)
    userEvent.type(inputs[1], variablesMock.password)

    fireEvent.submit(form)

    await act(async () => {
      await sleep()
    })

    expect(form).toBeInTheDocument()
  })

  it('should submit the form and receive only access token', async () => {
    makeSut([
      { ...loginMock(), result: { data: { login: { accessToken: variablesMock.token, refreshToken: undefined } } } }
    ])

    const form = screen.getByTestId('form')
    const inputs = screen.getAllByTestId('base-input')
    userEvent.type(inputs[0], variablesMock.email)
    userEvent.type(inputs[1], variablesMock.password)

    fireEvent.submit(form)

    await act(async () => {
      await sleep()
    })

    expect(form).toBeInTheDocument()
  })
})
