import makeValidationMock from '@/../tests/mocks/validator.mock'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import IValidation from '@/services/validators/protocols/validation.model'
import FormProvider from '@/context/models/form/form.provider'
import ControlForm from '../ControlForm'
import ControlInput from '../ControlInput'
import ControlInputProps from '../protocols/ControlInput.model'

const makeSut = (props: ControlInputProps & { validator?: IValidation }): void => {
  render(
    <FormProvider>
      <ControlForm submitHandler={jest.fn()} validator={props.validator}>
        <ControlInput {...props} icon={props.icon} label={props.label} />
      </ControlForm>
    </FormProvider>
  )
}

describe('Input', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render correctly', () => {
    makeSut({ label: 'Any name', name: 'any_name' })

    const inputElement = screen.getByTestId('base-input')

    expect(inputElement).toBeInTheDocument()
  })

  describe('icon interaction', () => {
    it('should display an icon if provided', () => {
      const icon = <div>Icon</div>

      makeSut({ name: 'input', icon, label: 'Input' })

      const iconElement = screen.getByTestId('base-input-icon')

      expect(iconElement).toBeInTheDocument()
    })

    it('should hide password if click on eyeClosedIcon', () => {
      makeSut({ name: 'input', type: 'password', label: 'Input' })

      const eyeOpenIcon = screen.getByTestId('eye-open-icon')
      fireEvent.click(eyeOpenIcon)

      const eyeClosedIcon = screen.getByTestId('eye-closed-icon')
      fireEvent.click(eyeClosedIcon)

      const input = screen.getByTestId('base-input')

      expect(input).toHaveAttribute('type', 'password')
    })

    it('should not display an icon if not provided', () => {
      makeSut({ name: 'input', label: 'Input' })

      expect(screen.queryByTestId('input-icon')).toBeNull()
    })

    it('should display an EyeIcon component if input type is password', () => {
      makeSut({ name: 'input', type: 'password', label: 'Input' })

      const iconElement = screen.getByTestId('eye-open-icon')

      expect(iconElement).toBeInTheDocument()
    })

    it('should change input type from password to text if click on EyeIcon', () => {
      makeSut({ name: 'input', type: 'password', label: 'Input' })

      const iconElement = screen.getByTestId('eye-open-icon')
      fireEvent.click(iconElement)

      const input = screen.getByTestId('base-input')

      expect(input).toHaveAttribute('type', 'text')
    })
  })

  describe('error handling', () => {
    it('should return a valid state if has a validator, is valid and is touched', () => {
      const validator = makeValidationMock(true)
      const validatorSpy = jest.spyOn(validator, 'validate')

      makeSut({ name: 'input', validator, label: 'Input' })

      const input = screen.getByTestId('base-input')
      fireEvent.change(input, { target: { value: 'any_value' } })

      expect(validatorSpy).toHaveBeenLastCalledWith('input', { input: 'any_value' })
    })

    it('should clear any error message onBlur if validator succeeds', () => {
      const validator = makeValidationMock(true)

      makeSut({ name: 'input', validator, label: 'Input' })

      const input = screen.getByTestId('base-input')
      fireEvent.blur(input)

      const errorMessage = screen.queryByTestId('base-input-error')

      expect(errorMessage).toBeNull()
    })

    it('should display an error message if validator fails', () => {
      const validator = makeValidationMock(false)

      makeSut({ name: 'input', validator, label: 'Input' })

      const input = screen.getByTestId('base-input')
      fireEvent.blur(input)

      const error = screen.getByTestId('base-input-error')

      expect(typeof error.textContent).toBe('string')
    })

    it('should not display an error if validator succeds', () => {
      const validator = makeValidationMock(true)

      makeSut({ name: 'input', validator, label: 'Input' })

      const input = screen.getByTestId('base-input')
      fireEvent.blur(input)

      const error = screen.queryByTestId('base-input-error')

      expect(error).toBeNull()
    })

    it('should not display an error if the input was not touched', () => {
      const validator = makeValidationMock(true)

      makeSut({ name: 'input', validator, label: 'Input' })

      const error = screen.queryByTestId('base-input-error')

      expect(error).toBeNull()
    })

    it('should remove any error message if input is valid', () => {
      const validator = makeValidationMock(true)

      makeSut({ name: 'input', validator, label: 'Input' })

      const input = screen.getByTestId('base-input')
      fireEvent.blur(input)

      const error = screen.queryByTestId('base-input-error')

      expect(error).toBeNull()
    })

    it('should validate input on focus', () => {
      const validator = makeValidationMock(true)
      const validatorSpy = jest.spyOn(validator, 'validate')

      makeSut({ name: 'input', validator, label: 'Input' })

      const input = screen.getByTestId('base-input')
      fireEvent.focus(input)

      expect(validatorSpy).toHaveBeenCalled()
    })

    it('should not render an error message onChange if the input was not touched', () => {
      const validator = makeValidationMock(false)

      makeSut({ name: 'input', validator, label: 'Input' })

      const input = screen.getByTestId('base-input')
      userEvent.type(input, 'any_value')
      fireEvent.change(input, { target: { value: 'any_value' } })

      const error = screen.queryByTestId('base-input-error')

      expect(error).toBeNull()
    })

    it('should render an error message onChange if the input was touched and validator fails', () => {
      const validator = makeValidationMock(false)

      makeSut({ name: 'input', validator, label: 'Input' })

      const input = screen.getByTestId('base-input')
      fireEvent.blur(input)
      userEvent.type(input, 'any_value')

      const error = screen.getByTestId('base-input-error')

      expect(typeof error.textContent).toBe('string')
    })

    it('should call onBlur if passed through props', () => {
      const onBlur = jest.fn()

      makeSut({ name: 'input', onBlur, label: 'Input' })

      const input = screen.getByTestId('base-input')
      fireEvent.blur(input)

      expect(onBlur).toHaveBeenCalled()
    })

    it('should call onChange if passed through props', () => {
      const onChange = jest.fn()

      makeSut({ name: 'input', onChange, label: 'Input' })

      const input = screen.getByTestId('base-input')
      fireEvent.change(input, { target: { value: 'any_value' } })

      expect(onChange).toHaveBeenCalled()
    })

    it('should call onFocus if passed through props', () => {
      const onFocus = jest.fn()

      makeSut({ name: 'input', onFocus, label: 'Input' })

      const input = screen.getByTestId('base-input')
      fireEvent.focus(input)

      expect(onFocus).toHaveBeenCalled()
    })

    it('should display an error onChange if the input was already touched', () => {
      const validator = makeValidationMock(false)

      makeSut({ name: 'input', validator, label: 'Input' })

      const input = screen.getByTestId('base-input')
      fireEvent.blur(input)
      fireEvent.change(input, { target: { value: 'any_value' } })
      const error = screen.getByTestId('base-input-error')

      expect(error).toBeInTheDocument()
    })
  })
})
