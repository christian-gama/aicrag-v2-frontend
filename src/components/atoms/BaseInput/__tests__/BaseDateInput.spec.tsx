import { render, screen } from '@testing-library/react'
import { BaseDateInput } from '..'

describe('BaseDateInput ', () => {
  it('renders correctly', () => {
    render(<BaseDateInput label="Any name" name="any_name" />)
    const baseInput = screen.getByTestId('base-date-input')

    expect(baseInput).toBeInTheDocument()
  })
})
