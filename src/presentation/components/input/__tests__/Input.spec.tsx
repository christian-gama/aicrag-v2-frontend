import validatorMock from '@/../tests/mocks/validator.mock'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { Input, InputProps } from '../Input'

const makeSut = ({ label, icon, onChange, ref, type, validator }: InputProps): void => {
  render(<Input label={label} icon={icon} onChange={onChange} ref={ref} type={type} validator={validator} />)
}

describe('Input', () => {
  afterEach(() => {
    cleanup()
  })

  it('should get value from ref', () => {
    const ref = React.createRef<HTMLInputElement>()

    makeSut({ label: 'input', ref })

    const input = screen.getByTestId('input-input')
    fireEvent.change(input, { target: { value: 'any_value' } })

    expect(ref.current.value).toBe('any_value')
  })

  describe('icon interaction', () => {
    it('should display an icon if provided', () => {
      const icon = <div>Icon</div>

      makeSut({ label: 'input', icon })

      const iconElement = screen.getByTestId('input-icon')

      expect(iconElement).toBeInTheDocument()
    })

    it('should have hide password if click on eyeClosedIcon', () => {
      makeSut({ label: 'input', type: 'password' })

      const eyeOpenIcon = screen.getByTestId('eyeOpenIcon')
      fireEvent.click(eyeOpenIcon)

      const eyeClosedIcon = screen.getByTestId('eyeClosedIcon')
      fireEvent.click(eyeClosedIcon)

      const input = screen.getByTestId('input-input')

      expect(input).toHaveAttribute('type', 'password')
    })

    it('should not display an icon if not provided', () => {
      makeSut({ label: 'input' })

      expect(screen.queryByTestId('input-icon')).toBeNull()
    })

    it('should display an EyeIcon component if input type is password', () => {
      makeSut({ label: 'input', type: 'password' })

      const iconElement = screen.getByTestId('eyeOpenIcon')

      expect(iconElement).toBeInTheDocument()
    })

    it('should change input type from password to text if click on EyeIcon', () => {
      makeSut({ label: 'input', type: 'password' })

      const iconElement = screen.getByTestId('eyeOpenIcon')
      fireEvent.click(iconElement)

      const input = screen.getByTestId('input-input')

      expect(input).toHaveAttribute('type', 'text')
    })
  })

  describe('error handling', () => {
    it('should clear any error message onBlur if validator succeeds', () => {
      const validator = jest.fn()

      makeSut({ label: 'input', validator })

      const input = screen.getByTestId('input-input')
      fireEvent.blur(input)

      const errorMessage = screen.queryByTestId('input-error')

      expect(errorMessage).toBeNull()
    })

    it('should display an error message if validator fails', () => {
      makeSut({ label: 'input', validator: validatorMock(false) })

      const input = screen.getByTestId('input-input')
      fireEvent.blur(input)

      const error = screen.getByTestId('input-error')

      expect(typeof error.textContent).toBe('string')
    })

    it('should not display an error if validator succeds', () => {
      makeSut({ label: 'input', validator: validatorMock(true) })

      const input = screen.getByTestId('input-input')
      fireEvent.blur(input)

      expect(screen.queryByTestId('input-error')).toBeNull()
    })

    it('should not display an error if the input was not touched', () => {
      makeSut({ label: 'input', validator: validatorMock(false) })

      expect(screen.queryByTestId('input-error')).toBeNull()
    })

    it('should remove any error message if input is valid', () => {
      makeSut({ label: 'input', validator: validatorMock(true) })

      const input = screen.getByTestId('input-input')
      fireEvent.blur(input)

      expect(screen.queryByTestId('input-error')).toBeNull()
    })

    it('should validate input on focus', () => {
      const validator = jest.fn(() => ({ isValid: true })) as any

      makeSut({ label: 'input', validator })

      const input = screen.getByTestId('input-input')
      fireEvent.focus(input)

      expect(validator).toHaveBeenCalled()
    })

    it('should not render an error message onChange if the input was not touched', () => {
      makeSut({ label: 'input', validator: validatorMock(false) })

      const input = screen.getByTestId('input-input')
      userEvent.type(input, 'any_value')
      fireEvent.change(input, { target: { value: 'any_value' } })

      const error = screen.queryByTestId('input-error')

      expect(error).toBeNull()
    })

    it('should render an error message onChange if the input was touched and validator fails', () => {
      makeSut({ label: 'input', validator: validatorMock(false) })

      const input = screen.getByTestId('input-input')
      fireEvent.blur(input)
      userEvent.type(input, 'any_value')

      const error = screen.getByTestId('input-error')

      expect(typeof error.textContent).toBe('string')
    })
  })
})
