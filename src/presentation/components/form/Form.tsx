import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IValidation from '@/domain/validation/validation.model'
import { AppDispatch, RootState } from '@/infra/store'
import { makeFormSlice } from '@/infra/store/form'
import { IForm } from '@/infra/store/form/protocols/form.model'

type FormProps = {
  name: IForm['name']
  validation?: IValidation
  submitHandler: () => Promise<void>
}

const Form: React.FC<FormProps> = ({ children, submitHandler, validation, name }) => {
  const dispatch = useDispatch<AppDispatch>()

  const isValid = useSelector<RootState, boolean>((state) => state[name].isValid)
  const formData = useSelector<RootState, { [key: string]: any }>((state) => state[name].formData)

  const { setErrorMessage, setIsSubmitted, setIsSubmitting, setIsValid, setIsValidating } = makeFormSlice(name).actions

  // Handlers
  const handleValidators = (): void => {
    if (validation) {
      dispatch(setIsValidating(true))

      for (const key in formData) {
        const error = validation.validate(key, formData)

        if (error) {
          dispatch(setErrorMessage(error))
          dispatch(setIsValid(false))
          dispatch(setIsValidating(false))

          return
        }
      }

      dispatch(setIsValidating(false))
    }
  }

  const tryToSubmit = async (): Promise<void> => {
    if (!validation || isValid) {
      try {
        await submitHandler()
        dispatch(setIsSubmitted(true))
      } catch (error) {
        if (error instanceof Error) dispatch(setErrorMessage(error.message))
      }
    }
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    dispatch(setIsSubmitting(true))

    event.preventDefault()

    handleValidators()

    await tryToSubmit()

    dispatch(setIsSubmitting(false))
  }

  return (
    <form onSubmit={onSubmit}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement, {
            form: {
              name: 'createTaskForm',
              data: useSelector<RootState, { [key: string]: any }>((state) => state.createTaskForm.formData),
              setData: makeFormSlice('createTaskForm').actions.setFormData
            }
          })
        }

        return child
      })}
    </form>
  )
}

export default Form
