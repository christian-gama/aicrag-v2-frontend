import { render, screen } from '@testing-library/react'
import { makeMockValidation } from '@/tests/mocks'
import { BaseInput } from '../BaseInput'

describe('BaseInput ', () => {
  it('renders correctly', () => {
    render(<BaseInput label="Any name" name="any_name" />)
    const baseInput = screen.getByTestId('base-input')

    expect(baseInput).toBeInTheDocument()
  })

  it("has an error state if validator is defined, the input is not valid, it's required and it's touched", () => {
    render(
      <BaseInput
        validator={makeMockValidation(jest.fn())}
        label="Any name"
        name="any_name"
        isTouched
        required
      />
    )
    const baseInput = screen.getByTestId('base-input')

    expect(baseInput.className).toMatch(/state_error/gi)
    expect(baseInput.className).not.toMatch(/state_success/gi)
  })

  it("has a default state if has a validator, it's not valid, its touched but it's not required", () => {
    render(
      <BaseInput
        validator={makeMockValidation(jest.fn())}
        label="Any name"
        name="any_name"
        isTouched
      />
    )
    const baseInput = screen.getByTestId('base-input')

    expect(baseInput.className).toMatch(/state_default/gi)
    expect(baseInput.className).not.toMatch(/state_error/gi)
    expect(baseInput.className).not.toMatch(/state_success/gi)
  })

  it('has a success state if has a validator and input is valid', () => {
    render(
      <BaseInput
        validator={makeMockValidation(jest.fn())}
        label="Any name"
        name="any_name"
        isTouched
        isValid
        required
      />
    )

    const baseInput = screen.getByTestId('base-input')

    expect(baseInput.className).toMatch(/state_success/gi)
    expect(baseInput.className).not.toMatch(/state_error/gi)
  })

  it("has a default state if has a validator, input is valid and it's not required", () => {
    render(
      <BaseInput
        validator={makeMockValidation(jest.fn())}
        label="Any name"
        name="any_name"
        isTouched
        isValid
      />
    )

    const baseInput = screen.getByTestId('base-input')

    expect(baseInput.className).toMatch(/state_default/gi)
    expect(baseInput.className).not.toMatch(/state_success/gi)
    expect(baseInput.className).not.toMatch(/state_error/gi)
  })

  it('has a default state if do not have a validator', () => {
    render(<BaseInput label="Any name" name="any_name" />)

    const baseInput = screen.getByTestId('base-input')

    expect(baseInput.className).toMatch(/state_default/gi)
    expect(baseInput.className).not.toMatch(/state_error/gi)
    expect(baseInput.className).not.toMatch(/state_success/gi)
  })

  it('has a default state if has a validator, is not touched and is not valid', () => {
    render(
      <BaseInput
        label="Any name"
        name="any_name"
        validator={makeMockValidation(jest.fn())}
      />
    )

    const baseInput = screen.getByTestId('base-input')

    expect(baseInput.className).toMatch(/state_default/gi)
    expect(baseInput.className).not.toMatch(/state_error/gi)
    expect(baseInput.className).not.toMatch(/state_success/gi)
  })

  it('renders an error if contains an error', () => {
    render(
      <BaseInput error="Any error" label="Any name" name="any_name" isTouched />
    )

    const baseInputWrapper = screen.getByTestId('base-input-wrapper')

    expect(baseInputWrapper.textContent).toMatch(/any error/gi)
  })

  it('renders an icon if contains an icon', () => {
    render(
      <BaseInput
        icon={() => <span>Icon</span>}
        label="Any name"
        name="any_name"
        isTouched
      />
    )

    const baseInputWrapper = screen.getByTestId('base-input-wrapper')

    expect(baseInputWrapper.textContent).toMatch(/icon/gi)
  })
})
