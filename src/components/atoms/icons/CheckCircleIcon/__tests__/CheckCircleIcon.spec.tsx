import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import CheckCircleIcon from '../CheckCircleIcon'

const makeSut = () => {
  return render(<CheckCircleIcon />)
}

describe('CheckCircleIcon ', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render correctly', () => {
    makeSut()

    const checkCircleIcon = screen.getByTestId('check-circle-icon')

    expect(checkCircleIcon).toBeInTheDocument()
  })
})
