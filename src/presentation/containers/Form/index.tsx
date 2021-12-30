import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formActions } from '@/application/models/form'
import { FormStates } from '@/application/models/form/protocols/form.model'
import { AppDispatch, RootState } from '@/application/store'
import Maybe from '@/application/utils/typescript/maybe.model'
import Alert from '../../components/UI/Alert'
import Input from '../../components/UI/Input'
import FormProps from './form.model'

const Form: React.FC<FormProps> = (props) => {
  const dispatch = useDispatch<AppDispatch>()

  const isValid = useSelector<RootState, FormStates['isValid']>((state) => state.form.isValid)
  const formData = useSelector<RootState, FormStates['formData']>((state) => state.form.formData)
  const errorMessage = useSelector<RootState, FormStates['errorMessage']>((state) => state.form.errorMessage)
  const isSubmitted = useSelector<RootState, FormStates['isSubmitted']>((state) => state.form.isSubmitted)

  const { setErrorMessage, setFormData, setIsSubmitted, setIsSubmitting, setIsValid, setIsValidating, resetForm } =
    formActions

  useEffect(() => {
    resetForm()
  }, [])

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
      <form onSubmit={onSubmit} data-testid="form">
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
