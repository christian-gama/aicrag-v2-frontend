import { cleanup, screen } from '@testing-library/react'
import React from 'react'
import renderWithProviders from '@/tests/helpers/renderWithProviders'
import Right from '../Right'

describe('Right', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    renderWithProviders(<Right />)
    const text = screen.getByText(/esta página não está disponível/gi)

    expect(text).toBeInTheDocument()
  })
})
