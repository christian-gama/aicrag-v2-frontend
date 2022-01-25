import React from 'react'
import IValidation from '@/services/validators/protocols/validation.model'
import Popover from '@/components/molecules/Popover'
import ProgressBar from '../../atoms/ProgressBar'
import useControlForm from './hooks/useControlForm'

type ControlFormProps = {
  successMessage?: string
  validator?: IValidation
  loading?: boolean
  submitHandler: () => Promise<void>
}

const ControlForm: React.FC<ControlFormProps> = ({
  successMessage,
  submitHandler,
  children,
  validator,
  loading
}) => {
  const {
    onCloseSuccessPopover,
    isSuccessPopoverOpen,
    onCloseErrorPopover,
    isErrorPopoverOpen,
    onSubmitHandler,
    isSubmitting,
    isSubmitted,
    isValid,
    error
  } = useControlForm({
    successMessage,
    submitHandler,
    children,
    validator,
    loading
  })

  return (
    <>
      <form onSubmit={onSubmitHandler} data-testid="form">
        {children}
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
          message={successMessage ?? 'Formulário bem sucedido'}
          type="success"
        />
      )}

      {<ProgressBar loading={loading ?? isSubmitting} />}
    </>
  )
}

export default ControlForm
