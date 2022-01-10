import { MockedProvider } from '@apollo/client/testing'
import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import WelcomeRoute from '@/external/router/WelcomeRoute'

const makeSut = () => {
  return render(
    <MockedProvider>
      <BrowserRouter>
        <Routes location={'/boas-vindas/entrar'}>{WelcomeRoute}</Routes>
      </BrowserRouter>
    </MockedProvider>
  )
}

describe('SignIn', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render SignIn correctly', () => {
    makeSut()

    const signIn = screen.getByTestId('sign-in')

    expect(signIn).toBeInTheDocument()
  })
})
