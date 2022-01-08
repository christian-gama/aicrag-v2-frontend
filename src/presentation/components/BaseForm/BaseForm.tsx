import React, { useContext, useEffect, useState } from 'react'
import FormContext from '@/application/models/context/form/FormContext'
import Popover from '@/presentation/components/UI/Popover'
import FormProps from './BaseForm.model'
import onSubmitHandler from './methods/onSubmitHandler'

const BaseForm: React.FC<FormProps> = (props) => {
  const { validator, children, submitHandler } = props
  const { dispatch, state } = useContext(FormContext)

  const { error, isValid, data, isResetting } = state.form

  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  useEffect(() => {
    dispatch({ type: 'FORM/RESET_FORM', payload: {} })
  }, [])

  useEffect(() => {
    if (isResetting) dispatch({ type: 'FORM/SET_IS_RESETTING', payload: { isResetting: false } })
  }, [isResetting])

  useEffect(() => {
    dispatch({ type: 'FORM/SET_VALIDATOR', payload: { validator } })
  }, [isResetting])

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

export default BaseForm
