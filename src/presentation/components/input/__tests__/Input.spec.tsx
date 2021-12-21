import { validationMock } from '@/../tests/mocks/validation-mock'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Input, { InputProps } from '../Input'

const makeSut = ({ label, icon, onChange, ref, type, validation }: InputProps): void => {
  render(<Input label={label} icon={icon} onChange={onChange} ref={ref} type={type} validation={validation} />)
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
    it('should display an error message if validation fails', () => {
      makeSut({ label: 'input', validation: validationMock(false) })

      const input = screen.getByTestId('input-input')
      fireEvent.blur(input)

      const error = screen.getByTestId('input-error')

      expect(error).toHaveTextContent('Error')
    })

    it('should not display an error if validation succeds', () => {
      makeSut({ label: 'input', validation: validationMock(true) })

      const input = screen.getByTestId('input-input')
      fireEvent.blur(input)

      expect(screen.queryByTestId('input-error')).toBeNull()
    })

    it('should not display an error if the input was not touched', () => {
      makeSut({ label: 'input', validation: validationMock(false) })

      expect(screen.queryByTestId('input-error')).toBeNull()
    })

    it('should remove any error message if input is valid', () => {
      makeSut({ label: 'input', validation: validationMock(true) })

      const input = screen.getByTestId('input-input')
      fireEvent.blur(input)

      expect(screen.queryByTestId('input-error')).toBeNull()
    })

    it('should validate input on focus', () => {
      const validation = jest.fn(() => ({ isValid: true })) as any

      makeSut({ label: 'input', validation })

      const input = screen.getByTestId('input-input')
      fireEvent.focus(input)

      expect(validation).toHaveBeenCalled()
    })

    it('should not render an error message onChange if the input was not touched', () => {
      makeSut({ label: 'input', validation: validationMock(false) })

      const input = screen.getByTestId('input-input')
      userEvent.type(input, 'any_value')
      fireEvent.change(input, { target: { value: 'any_value' } })

      const error = screen.queryByTestId('input-error')

      expect(error).toBeNull()
    })

    it('should render an error message onChange if the input was touched and validation fails', () => {
      makeSut({ label: 'input', validation: validationMock(false) })

      const input = screen.getByTestId('input-input')
      fireEvent.blur(input)
      userEvent.type(input, 'any_value')

      const error = screen.getByTestId('input-error')

      expect(error).toHaveTextContent('Error')
    })
  })
})
