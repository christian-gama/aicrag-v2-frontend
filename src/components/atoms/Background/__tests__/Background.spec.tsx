import { render, screen } from '@testing-library/react'
import React from 'react'
import Background from '../Background'

const makeSut = () => {
  return render(<Background />)
}

describe('Background', () => {
  it('should render Background correctly', () => {
    makeSut()
    expect(screen.getByTestId('background')).toBeTruthy()
  })
})
