import React, { useContext, useEffect, useState } from 'react'
import FormContext from '@/application/models/context/form/FormContext'
import Popover from '@/presentation/components/UI/Popover'
import FormProps from './form.model'
import onSubmitHandler from './methods/onSubmitHandler'

const FormContainer: React.FC<FormProps> = (props) => {
  const { validator, children, submitHandler } = props
  const { dispatch, state } = useContext(FormContext)

  const { error, isValid, data } = state.form

  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  useEffect(() => {}, [])

  useEffect(() => {
    dispatch({ type: 'FORM/SET_VALIDATOR', payload: { validator } })
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
            data
          })
        }
        data-testid="form"
      >
        {children}
      </form>

      {!isValid && error && <Popover isOpen={isPopoverOpen} message={error} type="error" />}
    </>
  )
}

export default FormContainer
