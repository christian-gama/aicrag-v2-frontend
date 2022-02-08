import { render, screen } from '@testing-library/react'
import { BaseSelectInput } from '..'

describe('BaseSelectInput ', () => {
  it('renders correctly', () => {
    render(
      <BaseSelectInput
        options={[{ label: '', value: '' }]}
        label="Any name"
        name="any_name"
      />
    )
    const baseSelectInput = screen.getByTestId('base-select-input')

    expect(baseSelectInput).toBeInTheDocument()
  })
})
