import makeValidationMock from '@/../tests/mocks/validator.mock'
import {
  render,
  fireEvent,
  screen,
  act,
  cleanup,
  waitFor
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React, { ComponentPropsWithRef } from 'react'
import FormProvider from '@/context/models/form/form.provider'
import OverlayRoot from '@/tests/helpers/overlayRoot'
import ControlForm from '../ControlForm'
import ControlInput from '../ControlInput'

const makeSut = ({
  submitHandler,
  children,
  validator,
  successMessage
}: ComponentPropsWithRef<typeof ControlForm>) => {
  render(
    <FormProvider>
      <ControlForm
        submitHandler={submitHandler}
        validator={validator}
        successMessage={successMessage}
      >
        {children}
      </ControlForm>
    </FormProvider>
  )
}

describe('Form', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  it('should render children', () => {
    const children = <ControlInput name="title" label="Title" />

    makeSut({
      children,
      submitHandler: jest.fn(),
      successMessage: 'any_message'
    })

    const inputElement = screen.getByTestId('base-input')

    expect(screen.getByTestId('form')).toContainElement(inputElement)
  })

  it('should call onSubmitHandler when form is submitted', async () => {
    const submitHandlerMock = jest.fn().mockReturnValue(Promise.resolve())
    const children = <ControlInput name="title" label="Title" />

    makeSut({
      children,
      submitHandler: submitHandlerMock,
      successMessage: 'any_message'
    })

    const input = screen.getByTestId('base-input')

    userEvent.type(input, 'any_value')
    fireEvent.blur(input)

    act(() => {
      fireEvent.submit(screen.getByTestId('form'))
    })

    await waitFor(() => expect(submitHandlerMock).toHaveBeenCalled())
  })

  it('should execute validation function if pass it through props', async () => {
    const validator = makeValidationMock(true)
    const validationSpy = jest.spyOn(validator, 'validate')

    const children = <ControlInput name="title" label="Title" />
    makeSut({
      children,
      validator,
      submitHandler: jest.fn(),
      successMessage: 'any_message'
    })
    const input = screen.getByTestId('base-input')

    userEvent.type(input, 'any_title')
    fireEvent.blur(input)

    act(() => {
      fireEvent.submit(screen.getByTestId('form'))
    })

    await waitFor(() => {
      expect(validationSpy).toHaveBeenCalled()
    })
  })

  it('should execute validation function if pass it through props', async () => {
    const validator = makeValidationMock(true)
    const validationSpy = jest.spyOn(validator, 'validate')

    const children = <ControlInput name="title" label="Title" />

    makeSut({
      children,
      validator,
      submitHandler: jest.fn(),
      successMessage: 'any_message'
    })

    const input = screen.getByTestId('base-input')

    userEvent.type(input, 'any_title')
    fireEvent.blur(input)

    act(() => {
      fireEvent.submit(screen.getByTestId('form'))
    })

    await waitFor(() => {
      expect(validationSpy).toHaveBeenCalled()
    })
  })

  it('should not call submitHandler if form is invalid', async () => {
    const submitHandler = jest.fn()
    const validator = makeValidationMock(false)
    const children = <ControlInput name="title" label="Title" />

    makeSut({
      children,
      submitHandler,
      validator,
      successMessage: 'any_message'
    })

    const input = screen.getByTestId('base-input')

    userEvent.type(input, 'any_title')
    fireEvent.blur(input)

    act(() => {
      fireEvent.submit(screen.getByTestId('form'))
    })

    await waitFor(() => {
      expect(submitHandler).not.toHaveBeenCalled()
    })
  })

  it('should catch if submitHandler throws', async () => {
    const submitHandler = jest.fn().mockImplementation(async () => {
      throw new Error('any_error')
    })

    const children = <ControlInput name="title" label="Title" />

    makeSut({ children, submitHandler, successMessage: 'any_message' })

    act(() => {
      fireEvent.submit(screen.getByTestId('form'))
    })

    await waitFor(() => {
      expect(submitHandler).toHaveBeenCalled()
    })
  })

  it('should display the error message below the input if validation fails when trying to submit right away', async () => {
    const validator = makeValidationMock(false)
    const children = <ControlInput name="title" label="Title" />

    makeSut({
      children,
      validator,
      submitHandler: jest.fn(),
      successMessage: 'any_message'
    })

    act(() => {
      fireEvent.submit(screen.getByTestId('form'))
    })

    const errorElement = screen.getByTestId('base-input-error')

    await waitFor(() => {
      expect(errorElement).toBeInTheDocument()
    })
  })
})
