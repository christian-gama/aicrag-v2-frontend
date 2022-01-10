import { MockedProvider } from '@apollo/client/testing'
import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import WelcomeRoute from '@/external/router/WelcomeRoute'

const makeSut = () => {
  return render(
    <MockedProvider>
      <BrowserRouter>
        <Routes location={'/boas-vindas/cadastrar'}>{WelcomeRoute}</Routes>
      </BrowserRouter>
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
