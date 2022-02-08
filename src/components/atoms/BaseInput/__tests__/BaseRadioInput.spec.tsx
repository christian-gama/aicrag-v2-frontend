import { render, screen } from '@testing-library/react'
import { BaseRadioInput } from '..'

describe('BaseRadioInput ', () => {
  it('renders correctly', () => {
    render(
      <BaseRadioInput label="Any name" name="any_name" value="any_value" />
    )
    const baseRadioInput = screen.getByTestId('base-radio-input')

    expect(baseRadioInput).toBeInTheDocument()
  })
})
