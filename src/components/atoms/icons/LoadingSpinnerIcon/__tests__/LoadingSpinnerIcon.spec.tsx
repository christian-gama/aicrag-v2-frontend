import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import LoadingSpinnerIcon from '../LoadingSpinnerIcon'

const makeSut = () => {
  return render(<LoadingSpinnerIcon />)
}

describe('LoadingSpinnerIcon ', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render correctly', () => {
    makeSut()

    const loadingSpinnerIcon = screen.getByTestId('loading-spinner-icon')

    expect(loadingSpinnerIcon).toBeInTheDocument()
  })
})
