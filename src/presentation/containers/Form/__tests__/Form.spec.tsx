import render from '@/../tests/config/renderWithProvider'
import formStoreMock from '@/../tests/mocks/formStore.mock'
import makeValidationMock from '@/../tests/mocks/validator.mock'
import { fireEvent, screen } from '@testing-library/dom'
import React from 'react'
import IValidation from '@/domain/validation/validation.model'
import { RootState } from '@/application/store'
import Input from '../../../components/UI/Input'
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
  form?: Partial<RootState['form']>
}

const makeSut = (config: sutConfig) => {
  const fn = config.submitHandler ?? jest.fn()
  const form = { ...formStoreMock.preloadedState.form, ...config.form }

  formStoreMock.preloadedState.form = form as any

  render(
    <Form submitHandler={fn} validation={config.validation}>
      {config.children}
    </Form>,
    { ...formStoreMock }
  )
}

describe('Form', () => {
  it('should render children', () => {
    const children = <Input name="title" />
    makeSut({ children })
    const inputElement = screen.getByTestId('title-input')

    expect(screen.getByTestId('form')).toContainElement(inputElement)
  })

  it('should call onSubmitHandler when form is submitted', async () => {
    const submitHandlerMock = jest.fn().mockReturnValue(Promise.resolve())
    const children = <Input name="title" />

    makeSut({ children, submitHandler: submitHandlerMock })

    fireEvent.submit(screen.getByTestId('form'))

    expect(submitHandlerMock).toHaveBeenCalled()
  })

  it('should execute validation function if pass it through props', () => {
    const validation = makeValidationMock(true)
    const validationSpy = jest.spyOn(validation, 'validate')
    const form = {
      formData: {
        title: 'any_title'
      }
    }

    const children = <Input name="title" />

    makeSut({ children, validation, form })

    fireEvent.submit(screen.getByTestId('form'))

    expect(validationSpy).toHaveBeenCalled()
  })

  it('should execute validation function if pass it through props', () => {
    const validation = makeValidationMock(true)
    const validationSpy = jest.spyOn(validation, 'validate')
    const form = {
      formData: {
        title: 'any_title'
      }
    }

    const children = <Input name="title" />

    makeSut({ children, validation, form })

    fireEvent.submit(screen.getByTestId('form'))

    expect(validationSpy).toHaveBeenCalled()
  })

  it('should not call submitHandler if form is invalid', () => {
    const submitHandler = jest.fn().mockReturnValue(Promise.resolve())
    const validation = makeValidationMock(false)
    const children = <Input name="title" />
    const form = {
      formData: {
        title: 'any_title'
      }
    }

    makeSut({ children, submitHandler, validation, form })

    fireEvent.submit(screen.getByTestId('form'))

    expect(submitHandler).not.toHaveBeenCalled()
  })

  it('should not pass props to child if children is an invalid component', () => {
    const children = 'a'
    const validation = makeValidationMock(false)
    const form = {
      formData: {
        title: 'any_title'
      }
    }

    makeSut({ children, validation, form })

    expect(screen.queryByTestId('title-input')).toBeNull()
  })

  it('should display an Alert component if throws when trying to submit', async () => {
    const container = document.createElement('div')
    container.setAttribute('id', 'overlay-root')
    document.body.appendChild(container)

    const submitHandler = jest.fn().mockImplementation(async () => {
      throw new Error('any_error')
    })

    const children = <Input name="title" />

    makeSut({ children, submitHandler, validation: makeValidationMock(true) })

    fireEvent.submit(screen.getByTestId('form'))

    const alert = await screen.findByTestId('alert')

    expect(alert).toBeTruthy()
  })
})
