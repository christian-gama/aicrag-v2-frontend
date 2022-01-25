import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import ErrorIcon from '../ErrorIcon'

describe('ErrorIcon ', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<ErrorIcon />)
    const errorIcon = screen.getByTestId('error-icon')

    expect(errorIcon).toBeInTheDocument()
  })
})
