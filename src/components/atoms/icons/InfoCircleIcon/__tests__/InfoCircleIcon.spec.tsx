import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import InfoCircleIcon from '../InfoCircleIcon'

const makeSut = () => {
  return render(<InfoCircleIcon />)
}

describe('InfoCircleIcon ', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render correctly', () => {
    makeSut()

    const infoCircleIcon = screen.getByTestId('info-circle-icon')

    expect(infoCircleIcon).toBeInTheDocument()
  })
})
