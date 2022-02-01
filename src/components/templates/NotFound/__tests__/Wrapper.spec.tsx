import { render, cleanup, screen } from '@testing-library/react'
import { Wrapper } from '../Wrapper'

describe('Wrapper', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<Wrapper />)
    const wrapper = screen.getByTestId('wrapper')

    expect(wrapper).toBeInTheDocument()
  })
})
