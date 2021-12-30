import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IValidation from '@/domain/validation/validation.model'
import { IForm } from '@/application/models/form'
import { makeActions } from '@/application/plugins/makeActions'
import { AppDispatch, RootState } from '@/application/store'
import Maybe from '@/application/utils/typescript/maybe.model'
import Alert from '../UI/Alert'
import Input from '../UI/Input'

type FormProps = {
  name: IForm['name']
  validation?: IValidation
  submitHandler: () => Promise<void>
}

const Form: React.FC<FormProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>()

  const isValid = useSelector<RootState, boolean>((state) => state[props.name].isValid)
  const formData = useSelector<RootState, { [key: string]: any }>((state) => state[props.name].formData)
  const errorMessage = useSelector<RootState, Maybe<string>>((state) => state[props.name].errorMessage)
  const isSubmitted = useSelector<RootState, boolean>((state) => state[props.name].isSubmitted)

  const { setErrorMessage, setFormData, setIsSubmitted, setIsSubmitting, setIsValid, setIsValidating } = makeActions(
    props.name
  )

  // Handlers
  const handleValidators = (): Maybe<string> => {
    dispatch(setIsValidating(true))

    if (props.validation) {
      for (const key in formData) {
        const error = props.validation.validate(key, formData)

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
      await props.submitHandler()
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

    if (!props.validation || !error) {
      await tryToSubmit()
    }

    dispatch(setIsSubmitting(false))
  }

  return (
    <>
      <form onSubmit={onSubmit} data-testid={props.name}>
        {React.Children.map(props.children, (child) => {
          if (React.isValidElement(child)) {
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            return React.cloneElement(child, {
              validation: props.validation,
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
