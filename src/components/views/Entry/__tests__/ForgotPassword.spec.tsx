import { MockedProvider } from '@apollo/client/testing'
import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import ForgotPassword from '../ForgotPassword'

const makeSut = () => {
  return render(
    <MockedProvider>
      <MemoryRouter initialEntries={['/entry/forgot-password']}>
        <Routes>
          <Route path="/entry/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </MemoryRouter>
    </MockedProvider>
  )
}

describe('ForgotPassword', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render ForgotPassword correctly', () => {
    makeSut()

    expect(
      screen.getByRole('heading', {
        name: /esqueceu sua senha\?/i
      })
    ).toBeInTheDocument()
  })
})
