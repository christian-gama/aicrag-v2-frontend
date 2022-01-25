import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import Divider from '../Divider'

describe('Divider', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<Divider />)

    const divider = screen.getByTestId('divider')

    expect(divider).toBeInTheDocument()
  })
})
