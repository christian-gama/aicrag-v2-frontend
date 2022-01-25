import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import LoadingSpinnerIcon from '../LoadingSpinnerIcon'

describe('LoadingSpinnerIcon ', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render correctly', () => {
    render(<LoadingSpinnerIcon />)
    const loadingSpinnerIcon = screen.getByTestId('loading-spinner-icon')

    expect(loadingSpinnerIcon).toBeInTheDocument()
  })
})
