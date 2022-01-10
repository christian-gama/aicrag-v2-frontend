import { MockedProvider } from '@apollo/client/testing'
import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter, Routes } from 'react-router-dom'
import EntryRoute from '@/external/router/EntryRoute'

const makeSut = () => {
  return render(
    <MockedProvider>
      <MemoryRouter initialEntries={['/entry/sign-up']}>
        <Routes>{EntryRoute}</Routes>
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
