import React, { useContext, useEffect, useState } from 'react'
import FormContext from '@/application/models/context/form/FormContext'
import Alert from '../../components/UI/Alert'
import FormProps from './form.model'
import onSubmitHandler from './methods/onSubmitHandler'

const FormContainer: React.FC<FormProps> = (props) => {
  const { validator, children, submitHandler } = props
  const { dispatch, state } = useContext(FormContext)

  const { formData, isValid, errorMessage } = state

  const [isAlertOpen, setIsAlertOpen] = useState(false)

  useEffect(() => {
    dispatch({ type: 'RESET_FORM', payload: {} })
  }, [])

  useEffect(() => {
    dispatch({ type: 'SET_VALIDATOR', payload: { validator } })
  }, [])

  console.log('formData', formData)

  return (
    <>
      <form
        onSubmit={async (event) =>
          await onSubmitHandler({
            dispatch,
            event,
            submitHandler,
            validator,
            setIsAlertOpen,
            formData
          })
        }
        data-testid="form"
      >
        {children}
      </form>

      {!isValid && errorMessage && (
        <Alert
          isOpen={isAlertOpen}
          mode="cancelOnly"
          message={errorMessage}
          title="Algo deu errado..."
          type="danger"
          onCancel={() => setIsAlertOpen(false)}
        />
      )}
    </>
  )
}

export default FormContainer
