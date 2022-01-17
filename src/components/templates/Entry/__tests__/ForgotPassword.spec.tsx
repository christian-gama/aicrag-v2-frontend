import { MockedProvider } from '@apollo/client/testing'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import FormProvider from '@/context/models/form/form.provider'
import ForgotPasswordForm from '../ForgotPasswordForm'

const makeSut = () => {
  return render(
    <MockedProvider>
      <FormProvider>
        <MemoryRouter initialEntries={['/entry/forgot-password']}>
          <Routes>
            <Route path="/entry/forgot-password" element={<ForgotPasswordForm />} />
          </Routes>
        </MemoryRouter>
      </FormProvider>
    </MockedProvider>
  )
}

describe('ForgotPassword', () => {
  afterEach(() => {
    cleanup()
  })

  beforeEach(() => {
    const container = document.createElement('div')
    container.setAttribute('id', 'overlay-root')
    document.body.appendChild(container)
  })

  it('should render ForgotPassword correctly', () => {
    makeSut()

    const forgotPassword = screen.getByTestId('form')

    expect(forgotPassword).toBeInTheDocument()
  })

  it('should submit the form', async () => {
    makeSut()

    const form = screen.getByTestId('form')
    const inputs = screen.getAllByTestId('base-input')
    fireEvent.change(inputs[0], { target: { value: 'any@email.com' } })

    fireEvent.submit(form)

    await waitFor(() => setInterval(() => {}, 1000))

    expect(form).toBeInTheDocument()
  })
})
