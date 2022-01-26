import { cleanup, render } from '@testing-library/react'
import React from 'react'
import getElement from '@/tests/helpers/getElement'
import Divider from '../Divider'

describe('Divider', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<Divider />)
    const divider = getElement('divider')

    expect(divider).toBeInTheDocument()
  })
})
