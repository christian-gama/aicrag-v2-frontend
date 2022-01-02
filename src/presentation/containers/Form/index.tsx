import React, { useContext, useEffect, useState } from 'react'
import FormContext from '@/application/models/context/form/FormContext'
import Popover from '@/presentation/components/UI/Popover'
import FormProps from './form.model'
import onSubmitHandler from './methods/onSubmitHandler'

const FormContainer: React.FC<FormProps> = (props) => {
  const { validator, children, submitHandler } = props
  const { dispatch, state } = useContext(FormContext)

  const { formData, isValid, errorMessage } = state

  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

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
            setIsPopoverOpen,
            formData
          })
        }
        data-testid="form"
      >
        {children}
      </form>

      {!isValid && errorMessage && <Popover isOpen={isPopoverOpen} message={errorMessage} type="error" />}
    </>
  )
}

export default FormContainer
