import makeValidationMock from '@/../tests/mocks/validator.mock'
import { render, fireEvent, screen, act, cleanup } from '@testing-library/react'
import React from 'react'
import IValidation from '@/services/validators/protocols/validation.model'
import FormProvider from '@/context/models/form/form.provider'
import ControlledInput from '../../../molecules/ControlledInput'
import BaseForm from '..'

type sutConfig = {
  children?:
  | string
  | number
  | boolean
  | {}
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  | React.ReactPortal
  | null
  | undefined
  validator?: IValidation
  submitHandler?: () => Promise<void>
}

const makeSut = (config: sutConfig) => {
  render(
    <FormProvider>
      <BaseForm
        submitHandler={config.submitHandler ?? jest.fn()}
        validator={config.validator ?? ({ validate: jest.fn() } as any)}
      >
        {config.children}
      </BaseForm>
    </FormProvider>
  )
}

describe('Form', () => {
  afterEach(() => {
    cleanup()
    document.querySelector('#overlay-root')?.remove()
  })

  beforeEach(() => {
    const container = document.createElement('div')
    container.setAttribute('id', 'overlay-root')
    document.body.appendChild(container)
  })

  it('should render children', () => {
    const children = <ControlledInput name="title" label="Title" />

    makeSut({ children })

    const inputElement = screen.getByTestId('title-input')

    expect(screen.getByTestId('form')).toContainElement(inputElement)
  })

  it('should call onSubmitHandler when form is submitted', async () => {
    const submitHandlerMock = jest.fn().mockReturnValue(Promise.resolve())
    const children = <ControlledInput name="title" label="Title" />

    makeSut({ children, submitHandler: submitHandlerMock })

    const input = screen.getByTestId('title-input')
    act(() => {
      fireEvent.change(input, { target: { value: 'any_value' } })
      fireEvent.blur(input)
      fireEvent.submit(screen.getByTestId('form'))
    })

    expect(submitHandlerMock).toHaveBeenCalled()
  })

  it('should execute validation function if pass it through props', () => {
    const validator = makeValidationMock(true)
    const validationSpy = jest.spyOn(validator, 'validate')

    const children = <ControlledInput name="title" label="Title" />

    makeSut({ children, validator })

    const input = screen.getByTestId('title-input')
    act(() => {
      fireEvent.change(input, { target: { value: 'any_title' } })
      fireEvent.blur(input)
      fireEvent.submit(screen.getByTestId('form'))
    })

    expect(validationSpy).toHaveBeenCalled()
  })

  it('should execute validation function if pass it through props', () => {
    const validator = makeValidationMock(true)
    const validationSpy = jest.spyOn(validator, 'validate')

    const children = <ControlledInput name="title" label="Title" />

    makeSut({ children, validator })

    const input = screen.getByTestId('title-input')
    act(() => {
      fireEvent.change(input, { target: { value: 'any_title' } })
      fireEvent.blur(input)
      fireEvent.submit(screen.getByTestId('form'))
    })

    expect(validationSpy).toHaveBeenCalled()
  })

  it('should not call submitHandler if form is invalid', async () => {
    const submitHandler = jest.fn()
    const validator = makeValidationMock(false)
    const children = <ControlledInput name="title" label="Title" />

    makeSut({ children, submitHandler, validator })

    const input = screen.getByTestId('title-input')
    act(() => {
      fireEvent.change(input, { target: { value: 'any_title' } })
      fireEvent.blur(input)
      fireEvent.submit(screen.getByTestId('form'))
    })

    expect(submitHandler).not.toHaveBeenCalled()
  })

  it('should display a Popover component if throws when trying to submit', async () => {
    const submitHandler = jest.fn().mockImplementation(async () => {
      throw new Error('any_error')
    })

    const children = <ControlledInput name="title" label="Title" />

    makeSut({ children, submitHandler, validator: makeValidationMock(true) })

    act(() => {
      fireEvent.submit(screen.getByTestId('form'))
    })

    const popover = await screen.findByTestId('popover')

    expect(popover).toBeTruthy()
  })

  it('should display the error message below the input if validation fails when trying to submit right away', () => {
    const validator = makeValidationMock(false)
    const children = <ControlledInput name="title" label="Title" />

    makeSut({ children, validator })

    act(() => {
      fireEvent.submit(screen.getByTestId('form'))
    })

    const errorElement = screen.getByTestId('title-error')

    expect(errorElement).toBeTruthy()
  })
})
