import render from '@/../tests/config/renderWithProvider'
import formStoreMock from '@/../tests/mocks/formStore.mock'
import makeValidationMock from '@/../tests/mocks/validator.mock'
import { fireEvent, screen } from '@testing-library/dom'
import React from 'react'
import IValidation from '@/domain/validation/validation.model'
import { RootState } from '@/application/store'
import ControlledInput from '../../ControlledInput'
import Form from '..'

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
  validation?: IValidation
  submitHandler?: () => Promise<void>
  formData?: Partial<RootState['form']['forms'][0]>
}

const makeSut = (config: sutConfig) => {
  const fn = config.submitHandler ?? jest.fn()

  if (config.formData) {
    const form = { ...formStoreMock.preloadedState.form?.forms[0], ...config.formData }
    formStoreMock.preloadedState.form!.forms[0] = form as any
  }

  render(
    <Form name="form" submitHandler={fn} validation={config.validation}>
      {config.children}
    </Form>,
    { ...formStoreMock }
  )
}

describe('Form', () => {
  it('should render children', () => {
    const children = <ControlledInput name="title" />
    makeSut({ children })
    const inputElement = screen.getByTestId('title-input')

    expect(screen.getByTestId('form')).toContainElement(inputElement)
  })

  it('should call onSubmitHandler when form is submitted', async () => {
    const submitHandlerMock = jest.fn().mockReturnValue(Promise.resolve())
    const children = <ControlledInput name="title" />

    makeSut({ children, submitHandler: submitHandlerMock })

    fireEvent.submit(screen.getByTestId('form'))

    expect(submitHandlerMock).toHaveBeenCalled()
  })

  it('should execute validation function if pass it through props', () => {
    const validation = makeValidationMock(true)
    const validationSpy = jest.spyOn(validation, 'validate')
    const formData = {
      formData: {
        title: 'any_title'
      }
    }

    const children = <ControlledInput name="title" />

    makeSut({ children, validation, formData })

    fireEvent.submit(screen.getByTestId('form'))

    expect(validationSpy).toHaveBeenCalled()
  })

  it('should execute validation function if pass it through props', () => {
    const validation = makeValidationMock(true)
    const validationSpy = jest.spyOn(validation, 'validate')
    const formData = {
      formData: {
        title: 'any_title'
      }
    }

    const children = <ControlledInput name="title" />

    makeSut({ children, validation, formData })

    fireEvent.submit(screen.getByTestId('form'))

    expect(validationSpy).toHaveBeenCalled()
  })

  it('should not call submitHandler if form is invalid', () => {
    const submitHandler = jest.fn().mockReturnValue(Promise.resolve())
    const validation = makeValidationMock(false)
    const children = <ControlledInput name="title" />
    const formData = {
      formData: {
        title: 'any_title'
      }
    }

    makeSut({ children, submitHandler, validation, formData })

    fireEvent.submit(screen.getByTestId('form'))

    expect(submitHandler).not.toHaveBeenCalled()
  })

  it('should not pass props to child if children is an invalid component', () => {
    const children = 'a'
    const validation = makeValidationMock(false)
    const formData = {
      formData: {
        title: 'any_title'
      }
    }

    makeSut({ children, validation, formData })

    expect(screen.queryByTestId('title-input')).toBeNull()
  })

  it('should display an Alert component if throws when trying to submit', async () => {
    const container = document.createElement('div')
    container.setAttribute('id', 'overlay-root')
    document.body.appendChild(container)

    const submitHandler = jest.fn().mockImplementation(async () => {
      throw new Error('any_error')
    })

    const children = <ControlledInput name="title" />

    makeSut({ children, submitHandler, validation: makeValidationMock(true) })

    fireEvent.submit(screen.getByTestId('form'))

    const alert = await screen.findByTestId('alert')

    expect(alert).toBeTruthy()
  })
})
