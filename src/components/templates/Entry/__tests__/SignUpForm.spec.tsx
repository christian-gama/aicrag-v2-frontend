import { MockedProvider } from '@apollo/client/testing'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import FormProvider from '@/context/models/form/form.provider'
import SignUpForm from '../SignUpForm'

const makeSut = () => {
  return render(
    <MockedProvider>
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
  afterEach(() => {
    cleanup()
  })

  beforeEach(() => {
    const container = document.createElement('div')
    container.setAttribute('id', 'overlay-root')
    document.body.appendChild(container)
  })

  it('should render SignUpForm correctly', () => {
    makeSut()

    const signInForm = screen.getByTestId('form')

    expect(signInForm).toBeInTheDocument()
  })

  it('should submit the form', async () => {
    makeSut()

    const form = screen.getByTestId('form')
    const inputs = screen.getAllByTestId('base-input')
    fireEvent.change(inputs[0], { target: { value: 'any name' } })
    fireEvent.change(inputs[1], { target: { value: 'any@email.com' } })
    fireEvent.change(inputs[2], { target: { value: 'any_password' } })
    fireEvent.change(inputs[3], { target: { value: 'any_password' } })

    fireEvent.submit(form)

    expect(screen.queryByTestId('base-input-error')).toBeNull()
  })
})
