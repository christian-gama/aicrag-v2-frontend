import { render, screen } from '@testing-library/react'
import React from 'react'
import Background from '../Background'

describe('Background', () => {
  it('renders correctly', () => {
    render(<Background />)
    const background = screen.getByTestId('background')

    expect(background).toBeTruthy()
  })
})
