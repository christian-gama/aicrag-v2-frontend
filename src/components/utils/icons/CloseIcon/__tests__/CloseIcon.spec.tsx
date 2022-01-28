import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import CloseIcon from '../CloseIcon'

describe('CloseIcon ', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<CloseIcon />)
    const closeIcon = screen.getByTestId('close-icon')

    expect(closeIcon).toBeInTheDocument()
  })
})
