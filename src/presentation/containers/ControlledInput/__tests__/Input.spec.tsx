import render from '@/../tests/config/renderWithProvider'
import formStoreMock from '@/../tests/mocks/formStore.mock'
import makeValidationMock from '@/../tests/mocks/validator.mock'
import { cleanup, fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Form from '../../Form'
import ControlledInput from '..'
import ControlledInputProps from '../ControlledInput.model'

const makeSut = (props: ControlledInputProps): void => {
  render(
    <Form name="form" submitHandler={jest.fn()} validation={props.validation}>
      <ControlledInput
        icon={props.icon}
        name={props.name}
        onBlur={props.onBlur}
        onChange={props.onChange}
        onFocus={props.onFocus}
        type={props.type}
      />
    </Form>,
    { ...formStoreMock }
  )
}

describe('Input', () => {
  afterEach(() => {
    cleanup()
  })

  describe('icon interaction', () => {
    it('should display an icon if provided', () => {
      const icon = <div>Icon</div>

      makeSut({ name: 'input', icon })

      const iconElement = screen.getByTestId('input-icon')

      expect(iconElement).toBeInTheDocument()
    })

    it('should hide password if click on eyeClosedIcon', () => {
      makeSut({ name: 'input', type: 'password' })

      const eyeOpenIcon = screen.getByTestId('eyeOpenIcon')
      fireEvent.click(eyeOpenIcon)

      const eyeClosedIcon = screen.getByTestId('eyeClosedIcon')
      fireEvent.click(eyeClosedIcon)

      const input = screen.getByTestId('input-input')

      expect(input).toHaveAttribute('type', 'password')
    })

    it('should not display an icon if not provided', () => {
      makeSut({ name: 'input' })

      expect(screen.queryByTestId('input-icon')).toBeNull()
    })

    it('should display an EyeIcon component if input type is password', () => {
      makeSut({ name: 'input', type: 'password' })

      const iconElement = screen.getByTestId('eyeOpenIcon')

      expect(iconElement).toBeInTheDocument()
    })

    it('should change input type from password to text if click on EyeIcon', () => {
      makeSut({ name: 'input', type: 'password' })

      const iconElement = screen.getByTestId('eyeOpenIcon')
      fireEvent.click(iconElement)

      const input = screen.getByTestId('input-input')

      expect(input).toHaveAttribute('type', 'text')
    })
  })

  describe('error handling', () => {
    it('should return a valid state if has a validator, is valid and is touched', () => {
      const validator = makeValidationMock(true)
      const validatorSpy = jest.spyOn(validator, 'validate')

      makeSut({ name: 'input', validation: validator })

      const input = screen.getByTestId('input-input')
      userEvent.type(input, 'any_value')

      expect(validatorSpy).toHaveBeenLastCalledWith('input', { input: 'any_value', name: 'form' })
    })

    it('should clear any error message onBlur if validator succeeds', () => {
      const validator = makeValidationMock(true)

      makeSut({ name: 'input', validation: validator })

      const input = screen.getByTestId('input-input')
      fireEvent.blur(input)

      const errorMessage = screen.queryByTestId('input-error')

      expect(errorMessage).toBeNull()
    })

    it('should display an error message if validator fails', () => {
      const validator = makeValidationMock(false)

      makeSut({ name: 'input', validation: validator })

      const input = screen.getByTestId('input-input')
      fireEvent.blur(input)

      const error = screen.getByTestId('input-error')

      expect(typeof error.textContent).toBe('string')
    })

    it('should not display an error if validator succeds', () => {
      const validator = makeValidationMock(true)

      makeSut({ name: 'input', validation: validator })

      const input = screen.getByTestId('input-input')
      fireEvent.blur(input)

      expect(screen.queryByTestId('input-error')).toBeNull()
    })

    it('should not display an error if the input was not touched', () => {
      const validator = makeValidationMock(true)

      makeSut({ name: 'input', validation: validator })

      expect(screen.queryByTestId('input-error')).toBeNull()
    })

    it('should remove any error message if input is valid', () => {
      const validator = makeValidationMock(true)

      makeSut({ name: 'input', validation: validator })

      const input = screen.getByTestId('input-input')
      fireEvent.blur(input)

      expect(screen.queryByTestId('input-error')).toBeNull()
    })

    it('should validate input on focus', () => {
      const validator = makeValidationMock(true)
      const validatorSpy = jest.spyOn(validator, 'validate')

      makeSut({ name: 'input', validation: validator })

      const input = screen.getByTestId('input-input')
      fireEvent.focus(input)

      expect(validatorSpy).toHaveBeenCalled()
    })

    it('should not render an error message onChange if the input was not touched', () => {
      const validator = makeValidationMock(false)

      makeSut({ name: 'input', validation: validator })

      const input = screen.getByTestId('input-input')
      userEvent.type(input, 'any_value')
      fireEvent.change(input, { target: { value: 'any_value' } })

      const error = screen.queryByTestId('input-error')

      expect(error).toBeNull()
    })

    it('should render an error message onChange if the input was touched and validator fails', () => {
      const validator = makeValidationMock(false)

      makeSut({ name: 'input', validation: validator })

      const input = screen.getByTestId('input-input')
      fireEvent.blur(input)
      userEvent.type(input, 'any_value')

      const error = screen.getByTestId('input-error')

      expect(typeof error.textContent).toBe('string')
    })

    it('should call onBlur if passed through props', () => {
      const onBlur = jest.fn()

      makeSut({ name: 'input', onBlur })

      const input = screen.getByTestId('input-input')
      fireEvent.blur(input)

      expect(onBlur).toHaveBeenCalled()
    })

    it('should call onChange if passed through props', () => {
      const onChange = jest.fn()

      makeSut({ name: 'input', onChange })

      const input = screen.getByTestId('input-input')
      fireEvent.change(input, { target: { value: 'any_value' } })

      expect(onChange).toHaveBeenCalled()
    })

    it('should call onFocus if passed through props', () => {
      const onFocus = jest.fn()

      makeSut({ name: 'input', onFocus })

      const input = screen.getByTestId('input-input')
      fireEvent.focus(input)

      expect(onFocus).toHaveBeenCalled()
    })
  })
})
