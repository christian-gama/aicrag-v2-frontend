import React, { useContext, useEffect } from 'react'
import FormContext from '@/application/models/context/form/FormContext'
import Alert from '../../components/UI/Alert'
import FormProps from './form.model'
import onSubmitHandler from './methods/onSubmitHandler'

const FormContainer: React.FC<FormProps> = (props) => {
  const { validator, children, submitHandler } = props
  const { dispatch, state } = useContext(FormContext)

  const { formData, isValid, errorMessage, isSubmitted } = state

  useEffect(() => {
    dispatch({ type: 'RESET_FORM', payload: {} })
  }, [])

  useEffect(() => {
    dispatch({ type: 'SET_VALIDATOR', payload: { validator } })
  }, [])

  return (
    <>
      <form
        onSubmit={async (event) =>
          await onSubmitHandler({
            dispatch,
            event,
            submitHandler,
            validator,
            formData
          })
        }
        data-testid="form"
      >
        {children}
      </form>

      {!isValid && errorMessage && isSubmitted && (
        <Alert isOpen mode="cancelOnly" message={errorMessage} title="Algo deu errado..." type="danger" />
      )}
    </>
  )
}

export default FormContainer
