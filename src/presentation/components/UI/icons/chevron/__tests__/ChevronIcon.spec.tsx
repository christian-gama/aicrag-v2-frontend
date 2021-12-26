import { cleanup, screen, render } from '@testing-library/react'
import React from 'react'
import ChevronIcon from '../ChevronIcon'

const makeSut = (): void => {
  render(<ChevronIcon />)
}

describe('ChevronIcon', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render', () => {
    makeSut()

    const icon = screen.getByTestId('chevron-right-icon')

    expect(icon).toBeInTheDocument()
  })
})
