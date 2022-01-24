import { render } from '@testing-library/react'
import React from 'react'
import getElement from '@/tests/helpers/getElement'
import Background from '../Background'

describe('Background', () => {
  it('renders correctly', () => {
    render(<Background />)
    const background = getElement('background')

    expect(background).toBeTruthy()
  })
})
