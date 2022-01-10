import { MockedProvider } from '@apollo/client/testing'
import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter, Routes } from 'react-router-dom'
import EntryRoute from '@/external/router/EntryRoute'

const makeSut = () => {
  return render(
    <MockedProvider>
      <MemoryRouter initialEntries={['/entry/sign-in']}>
        <Routes>{EntryRoute}</Routes>
      </MemoryRouter>
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
