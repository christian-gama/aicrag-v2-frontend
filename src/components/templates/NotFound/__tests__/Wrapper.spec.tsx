import { render, screen } from '@testing-library/react'
import { setupTests } from '@/tests/helpers'
import { Wrapper } from '../Wrapper'

describe('Wrapper', () => {
  setupTests()

  it('renders correctly', () => {
    render(<Wrapper />)
    const wrapper = screen.getByTestId('wrapper')

    expect(wrapper).toBeInTheDocument()
  })
})
