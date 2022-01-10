import React from 'react'
import Popover from '@/components/molecules/Popover'
import ProgressBar from '../../atoms/ProgressBar'
import useControlForm from './hooks/useControlForm'
import ControlFormProps from './protocols/ControlForm.model'

const ControlForm: React.FC<ControlFormProps> = (props) => {
  const {
    error,
    isErrorPopoverOpen,
    isSubmitted,
    isSubmitting,
    isSuccessPopoverOpen,
    isValid,
    onCloseErrorPopover,
    onCloseSuccessPopover,
    onSubmitHandler
  } = useControlForm(props)

  return (
    <>
      <form onSubmit={onSubmitHandler} data-testid="form">
        {props.children}
      </form>

      {!isValid && error && (
        <Popover
          onClose={
            /* istanbul ignore next */
            onCloseErrorPopover
          }
          isOpen={isErrorPopoverOpen}
          message={error}
          type="error"
        />
      )}

      {isValid && !error && isSubmitted && (
        <Popover
          onClose={
            /* istanbul ignore next */
            onCloseSuccessPopover
          }
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
