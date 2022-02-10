import { useForm } from '@/context/models/form'
import { ComponentPropsWithRef, useEffect } from 'react'
import { ControlForm } from '..'

export const useControlForm = (
  props: ComponentPropsWithRef<typeof ControlForm>
) => {
  const {
    formActions: {
      setFormIsSubmitting,
      setFormIsValidating,
      setFormIsSubmitted,
      setFormIsResetting,
      setInputIsTouched,
      setFormValidator,
      setInputIsValid,
      setFormIsValid,
      setInputError,
      setFormError,
      resetForm
    },
    state: {
      input: { isTouched },
      form: {
        error,
        isValid,
        data,
        isResetting,
        isSubmitting,
        isSubmitted,
        isDirty
      }
    }
  } = useForm()

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    setFormIsSubmitting(true)
    event.preventDefault()

    const error = handleValidation()

    if (!props.validator || !error) {
      await tryToSubmit()
    }
  }

  const handleValidation = () => {
    setFormIsValidating(true)

    if (props.validator) {
      for (const name in data) {
        const error = props.validator.validate(name, data)

        if (error) {
          setInputIsTouched(name, true)
          setInputIsValid(name, false)
          setInputError(name, error)
          setFormIsValidating(false)
          setFormIsValidating(false)
          setFormIsSubmitting(false)
          setFormIsSubmitted(false)
          setFormIsValid(false)
          setFormError(
            'Não foi possível continuar, pois há erros que precisam ser corrigidos'
          )

          return error
        }
      }
    }

    setFormIsValidating(false)
    setFormError(undefined)
    setFormIsValid(true)
  }

  const tryToSubmit = async (): Promise<void> => {
    try {
      const postSubmitFn = await props.submitHandler()

      setFormIsSubmitting(false)
      setFormIsSubmitted(true)

      postSubmitFn?.()
    } catch (error) {
      // API errors are handled by the errorLink from Apollo Client
      setFormIsSubmitting(false)
      setFormIsSubmitted(false)
      setFormIsValid(false)
    }
  }

  useEffect(() => {
    resetForm()
  }, [])

  useEffect(() => {
    if (isResetting) {
      setFormIsResetting(false)
    }
  }, [isResetting])

  useEffect(() => {
    setFormValidator(props.validator)
  }, [isResetting])

  useEffect(() => {
    if (isDirty && props.validator) {
      for (const name in data) {
        const error = props.validator.validate(name, data)

        if (error && isTouched[name]) {
          setInputIsValid(name, false)
          setInputError(name, error)
        } else if (isTouched[name]) {
          setInputIsValid(name, true)
          setInputError(name, undefined)
        }
      }
    }
  }, [isDirty, data])

  return {
    onSubmitHandler,
    isSubmitting,
    isSubmitted,
    isValid,
    error,
    data
  }
}
