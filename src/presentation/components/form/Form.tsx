import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IValidation from '@/domain/validation/validation.model'
import Maybe from '@/application/utils/typescript/maybe.model'
import { AppDispatch, RootState } from '@/infra/store'
import { IForm } from '@/infra/store/form/protocols/form.model'
import { makeActions } from '@/infra/store/utils/makeActions'
import Alert from '../UI/alert/Alert'
import Input from './components/input/Input'

type FormProps = {
  name: IForm['name']
  validation?: IValidation
  submitHandler: () => Promise<void>
}

const Form: React.FC<FormProps> = ({ children, submitHandler, validation, name }) => {
  const dispatch = useDispatch<AppDispatch>()

  const isValid = useSelector<RootState, boolean>((state) => state[name].isValid)
  const formData = useSelector<RootState, { [key: string]: any }>((state) => state[name].formData)
  const errorMessage = useSelector<RootState, Maybe<string>>((state) => state[name].errorMessage)
  const isSubmitted = useSelector<RootState, boolean>((state) => state[name].isSubmitted)

  const { setErrorMessage, setFormData, setIsSubmitted, setIsSubmitting, setIsValid, setIsValidating } =
    makeActions(name)

  // Handlers
  const handleValidators = (): Maybe<string> => {
    dispatch(setIsValidating(true))

    if (validation) {
      for (const key in formData) {
        const error = validation.validate(key, formData)

        if (error) {
          dispatch(setErrorMessage(error))
          dispatch(setIsValid(false))
          dispatch(setIsValidating(false))

          return error
        }
      }
    }

    dispatch(setIsValid(true))
    dispatch(setIsValidating(false))
  }

  const tryToSubmit = async (): Promise<void> => {
    try {
      await submitHandler()
    } catch (error: any) {
      dispatch(setErrorMessage(error.message))
      dispatch(setIsValid(false))
    }

    dispatch(setIsSubmitted(true))
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    dispatch(setIsSubmitting(true))
    event.preventDefault()

    const error = handleValidators()

    if (!validation || !error) {
      await tryToSubmit()
    }

    dispatch(setIsSubmitting(false))
  }

  return (
    <>
      <form onSubmit={onSubmit} data-testid={name}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            return React.cloneElement(child, {
              validation,
              form: {
                data: formData,
                setData: setFormData
              }
            } as React.ComponentProps<typeof Input>)
          }

          return child
        })}
      </form>

      {!isValid && errorMessage && isSubmitted && (
        <Alert isOpen mode="cancelOnly" message={errorMessage} title="Algo deu errado..." type="danger" />
      )}
    </>
  )
}

export default Form
