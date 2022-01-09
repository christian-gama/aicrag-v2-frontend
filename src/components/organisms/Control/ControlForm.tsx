import React, { useContext, useEffect, useState } from 'react'
import FormContext from '@/context/models/form/form.context'
import Popover from '@/components/molecules/Popover'
import ProgressBar from '../../atoms/ProgressBar'
import onSubmitHandler from './methods/onSubmitHandler'
import ControlFormProps from './protocols/ControlForm.model'

const ControlForm: React.FC<ControlFormProps> = (props) => {
  const { validator, children, submitHandler } = props
  const { dispatch, state } = useContext(FormContext)

  const { error, isValid, data, isResetting, isSubmitting, isSubmitted } = state.form

  const [isErrorPopoverOpen, setIsErrorPopoverOpen] = useState(false)
  const [isSuccessPopoverOpen, setIsSuccessPopoverOpen] = useState(false)

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
        onSubmit={async (event) => {
          await onSubmitHandler({
            dispatch,
            event,
            submitHandler,
            validator,
            setIsErrorPopoverOpen,
            setIsSuccessPopoverOpen,
            data
          })
        }}
        data-testid="form"
      >
        {children}
      </form>

      {!isValid && error && (
        <Popover
          onClose={() => setIsErrorPopoverOpen(false)}
          isOpen={isErrorPopoverOpen}
          message={error}
          type="error"
        />
      )}

      {isValid && !error && isSubmitted && (
        <Popover
          onClose={() => setIsSuccessPopoverOpen(false)}
          isOpen={isSuccessPopoverOpen}
          message={props.successMessage ?? 'Formulário bem sucedido'}
          type="success"
        />
      )}

      {<ProgressBar loading={props.loading ?? isSubmitting} />}
    </>
  )
}

export default ControlForm
