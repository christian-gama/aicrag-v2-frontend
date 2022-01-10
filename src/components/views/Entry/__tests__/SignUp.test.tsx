import { MockedProvider } from '@apollo/client/testing'
import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import SignUp from '../SignUp'

const makeSut = () => {
  return render(
    <MockedProvider>
      <MemoryRouter initialEntries={['/entry/sign-up']}>
        <Routes>
          <Route path="/entry">
            <Route path="sign-up" element={<SignUp />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </MockedProvider>
  )
}

describe('SignUp', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render SignUp correctly', () => {
    makeSut()

    const signUp = screen.getByTestId('sign-up')

    expect(signUp).toBeInTheDocument()
  })
})
