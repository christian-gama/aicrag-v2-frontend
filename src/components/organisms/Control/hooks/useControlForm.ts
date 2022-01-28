import { useContext, useEffect, ComponentPropsWithRef } from 'react'
import FormContext from '@/context/models/form/form.context'
import ControlForm from '../ControlForm'

const useControlForm = (props: ComponentPropsWithRef<typeof ControlForm>) => {
  const { dispatch, state } = useContext(FormContext)

  const { error, isValid, data, isResetting, isSubmitting, isSubmitted } =
    state.form

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
          dispatch({
            type: 'FORM/SET_IS_SUBMITTING',
            payload: { isSubmitting: false }
          })
          dispatch({
            type: 'FORM/SET_IS_SUBMITTED',
            payload: { isSubmitted: false }
          })

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
  }

  const tryToSubmit = async (): Promise<void> => {
    try {
      const postSubmitFn = await props.submitHandler()

      dispatch({
        type: 'FORM/SET_IS_SUBMITTED',
        payload: { isSubmitted: true }
      })

      dispatch({
        type: 'FORM/SET_IS_SUBMITTING',
        payload: { isSubmitting: false }
      })

      postSubmitFn?.()
    } catch (error) {
      // API errors are handled by the errorLink from Apollo Client
      dispatch({ type: 'FORM/SET_IS_VALID', payload: { isValid: false } })
      dispatch({
        type: 'FORM/SET_IS_SUBMITTING',
        payload: { isSubmitting: false }
      })
      dispatch({
        type: 'FORM/SET_IS_SUBMITTED',
        payload: { isSubmitted: false }
      })
    }
  }

  return {
    onSubmitHandler,
    isSubmitting,
    isSubmitted,
    isValid,
    error,
    data
  }
}

export default useControlForm
