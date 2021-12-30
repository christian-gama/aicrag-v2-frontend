import render from '@/../tests/config/renderWithProvider'
import formStoreMock from '@/../tests/mocks/formStore.mock'
import makeValidationMock from '@/../tests/mocks/validator.mock'
import { fireEvent, screen } from '@testing-library/dom'
import React from 'react'
import IValidation from '@/domain/validation/validation.model'
import { RootState } from '@/infra/store'
import Input from '../../UI/Input'
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
  createTaskForm?: Partial<RootState['createTaskForm']>
}

const makeSut = (config: sutConfig) => {
  const fn = config.submitHandler ?? jest.fn()
  const createTaskForm = { ...formStoreMock.preloadedState.createTaskForm, ...config.createTaskForm }

  formStoreMock.preloadedState.createTaskForm = createTaskForm as any

  render(
    <Form name="createTaskForm" submitHandler={fn} validation={config.validation}>
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

    expect(screen.getByTestId('createTaskForm')).toContainElement(inputElement)
  })

  it('should call submitHandler when form is submitted', async () => {
    const submitHandler = jest.fn().mockReturnValue(Promise.resolve())
    const children = <Input name="title" />

    makeSut({ children, submitHandler })

    fireEvent.submit(screen.getByTestId('createTaskForm'))

    expect(submitHandler).toHaveBeenCalled()
  })

  it('should execute validation function if pass it through props', () => {
    const validation = makeValidationMock(true)
    const validationSpy = jest.spyOn(validation, 'validate')
    const createTaskForm = {
      formData: {
        title: 'any_title'
      }
    }

    const children = <Input name="title" />

    makeSut({ children, validation, createTaskForm })

    fireEvent.submit(screen.getByTestId('createTaskForm'))

    expect(validationSpy).toHaveBeenCalled()
  })

  it('should execute validation function if pass it through props', () => {
    const validation = makeValidationMock(true)
    const validationSpy = jest.spyOn(validation, 'validate')
    const createTaskForm = {
      formData: {
        title: 'any_title'
      }
    }

    const children = <Input name="title" />

    makeSut({ children, validation, createTaskForm })

    fireEvent.submit(screen.getByTestId('createTaskForm'))

    expect(validationSpy).toHaveBeenCalled()
  })

  it('should not call submitHandler if form is invalid', () => {
    const submitHandler = jest.fn().mockReturnValue(Promise.resolve())
    const validation = makeValidationMock(false)
    const children = <Input name="title" />
    const createTaskForm = {
      formData: {
        title: 'any_title'
      }
    }

    makeSut({ children, submitHandler, validation, createTaskForm })

    fireEvent.submit(screen.getByTestId('createTaskForm'))

    expect(submitHandler).not.toHaveBeenCalled()
  })

  it('should not pass props to child if children is an invalid component', () => {
    const children = 'a'
    const validation = makeValidationMock(false)
    const createTaskForm = {
      formData: {
        title: 'any_title'
      }
    }

    makeSut({ children, validation, createTaskForm })

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

    fireEvent.submit(screen.getByTestId('createTaskForm'))

    const alert = await screen.findByTestId('alert')

    expect(alert).toBeTruthy()
  })
})
