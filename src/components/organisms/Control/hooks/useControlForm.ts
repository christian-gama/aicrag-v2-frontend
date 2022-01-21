import { useContext, useState, useEffect, ComponentPropsWithRef } from 'react'
import FormContext from '@/context/models/form/form.context'
import ControlForm from '../ControlForm'

const useControlForm = (props: ComponentPropsWithRef<typeof ControlForm>) => {
  const { dispatch, state } = useContext(FormContext)

  const { error, isValid, data, isResetting, isSubmitting, isSubmitted } =
    state.form

  const [isErrorPopoverOpen, setIsErrorPopoverOpen] = useState(false)
  const [isSuccessPopoverOpen, setIsSuccessPopoverOpen] = useState(false)

  useEffect(() => {
    dispatch({ type: 'FORM/RESET_FORM', payload: {} })
  }, [])

  useEffect(() => {
    if (isResetting) {
      dispatch({
        type: 'FORM/SET_IS_RESETTING',
        payload: { isResetting: false }
      })
    }
  }, [isResetting])

  useEffect(() => {
    dispatch({
      type: 'FORM/SET_VALIDATOR',
      payload: { validator: props.validator }
    })
  }, [isResetting])

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    dispatch({
      type: 'FORM/SET_IS_SUBMITTING',
      payload: { isSubmitting: true }
    })

    event.preventDefault()

    const error = handleValidation()

    if (!props.validator || !error) {
      await tryToSubmit()
    }

    dispatch({
      type: 'FORM/SET_IS_SUBMITTING',
      payload: { isSubmitting: false }
    })
  }

  const handleValidation = () => {
    dispatch({
      type: 'FORM/SET_IS_VALIDATING',
      payload: { isValidating: true }
    })

    if (props.validator) {
      for (const field in data) {
        const error = props.validator.validate(field, data)

        if (error) {
          dispatch({
            type: 'FORM/SET_ERROR',
            payload: {
              error:
                'Não foi possível continuar, pois há erros que precisam ser corrigidos'
            }
          })
          dispatch({ type: 'FORM/SET_IS_VALID', payload: { isValid: false } })
          dispatch({
            type: 'FORM/SET_IS_VALIDATING',
            payload: { isValidating: false }
          })
          dispatch({
            type: 'INPUT/SET_ERROR',
            payload: { error: { [field]: error } }
          })
          dispatch({
            type: 'INPUT/SET_IS_TOUCHED',
            payload: { isTouched: { [field]: true } }
          })
          dispatch({
            type: 'INPUT/SET_IS_VALID',
            payload: { isValid: { [field]: false } }
          })
          setIsErrorPopoverOpen(true)

          return error
        }
      }
    }

    dispatch({ type: 'FORM/SET_ERROR', payload: { error: undefined } })
    dispatch({
      type: 'FORM/SET_IS_VALIDATING',
      payload: { isValidating: false }
    })
    dispatch({ type: 'FORM/SET_IS_VALID', payload: { isValid: true } })
    setIsErrorPopoverOpen(false)
  }

  const tryToSubmit = async (): Promise<void> => {
    try {
      await props.submitHandler()

      setIsErrorPopoverOpen(false)
      setIsSuccessPopoverOpen(true)
    } catch (error) {
      // API errors are handled by the errorLink from Apollo Client
      console.log(error)
      dispatch({ type: 'FORM/SET_IS_VALID', payload: { isValid: false } })

      setIsSuccessPopoverOpen(false)
    }

    dispatch({ type: 'FORM/SET_IS_SUBMITTED', payload: { isSubmitted: true } })
  }

  /* istanbul ignore next */
  const onCloseErrorPopover = () => {
    setIsErrorPopoverOpen(false)
  }

  /* istanbul ignore next */
  const onCloseSuccessPopover = () => {
    setIsSuccessPopoverOpen(false)
  }

  return {
    data,
    error,
    isErrorPopoverOpen,
    isSuccessPopoverOpen,
    isValid,
    isSubmitting,
    isSubmitted,
    onSubmitHandler,
    onCloseErrorPopover,
    onCloseSuccessPopover
  }
}

export default useControlForm
