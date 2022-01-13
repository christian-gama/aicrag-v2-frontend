import { MockedProvider, MockedResponse } from '@apollo/client/testing'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { LoginDocument } from '@/services/api'
import FormProvider from '@/context/models/form/form.provider'
import SignInForm from '../SignInForm'

const makeSut = (mocks: Array<MockedResponse<Record<string, any>>>) => {
  return render(
    <MockedProvider mocks={mocks}>
      <FormProvider>
        <SignInForm />
      </FormProvider>
    </MockedProvider>
  )
}

describe('SignInForm', () => {
  afterEach(() => {
    cleanup()
  })

  beforeEach(() => {
    const container = document.createElement('div')
    container.setAttribute('id', 'overlay-root')
    document.body.appendChild(container)
  })

  it('should render SignInForm correctly', () => {
    const mock: Array<MockedResponse<Record<string, any>>> = [
      {
        request: {
          query: LoginDocument,
          variables: {
            email: 'any@email.com',
            password: 'any_password'
          }
        },
        result: {
          data: {
            login: { accessToken: 'any_token', refreshToken: 'any_token' }
          }
        }
      }
    ]

    makeSut(mock)

    const signInForm = screen.getByTestId('form')

    expect(signInForm).toBeInTheDocument()
  })

  it('should submit the form', async () => {
    const mock: Array<MockedResponse<Record<string, any>>> = [
      {
        request: {
          query: LoginDocument,
          variables: {
            email: 'any@email.com',
            password: 'any_password'
          }
        },
        result: {
          data: {
            login: { accessToken: 'any_token', refreshToken: 'any_token' }
          }
        }
      }
    ]

    makeSut(mock)

    const form = screen.getByTestId('form')
    const inputs = screen.getAllByTestId('base-input')
    fireEvent.change(inputs[0], { target: { value: 'any@email.com' } })
    fireEvent.change(inputs[1], { target: { value: 'any_password' } })

    fireEvent.submit(form)

    await waitFor(() => setInterval(() => {}, 1000))

    expect(form).toBeInTheDocument()
  })
})
