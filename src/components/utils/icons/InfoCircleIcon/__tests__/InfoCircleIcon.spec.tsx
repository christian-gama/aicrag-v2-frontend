import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import InfoCircleIcon from '../InfoCircleIcon'

describe('InfoCircleIcon ', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<InfoCircleIcon />)
    const infoCircleIcon = screen.getByTestId('info-circle-icon')

    expect(infoCircleIcon).toBeInTheDocument()
  })
})
