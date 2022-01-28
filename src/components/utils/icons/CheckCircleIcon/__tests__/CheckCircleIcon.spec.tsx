import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import CheckCircleIcon from '../CheckCircleIcon'

describe('CheckCircleIcon ', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<CheckCircleIcon />)
    const checkCircleIcon = screen.getByTestId('check-circle-icon')

    expect(checkCircleIcon).toBeInTheDocument()
  })
})
