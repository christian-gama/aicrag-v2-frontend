import React, { useEffect } from 'react'
import IValidation from '@/services/validators/protocols/validation.model'
import { popoverVar } from '@/external/graphql/reactiveVars/popoverVar'
import ProgressBar from '../../atoms/ProgressBar'
import useControlForm from './hooks/useControlForm'

type ControlFormProps = {
  validator?: IValidation
  successMessage: string
  loading?: boolean
  submitHandler: () => Promise<void>
}

const ControlForm: React.FC<ControlFormProps> = ({
  successMessage,
  submitHandler,
  validator,
  children,
  loading
}) => {
  const { onSubmitHandler, isSubmitting, isSubmitted, isValid, error } =
    useControlForm({
      successMessage,
      submitHandler,
      validator,
      children,
      loading
    })

  useEffect(() => {
    if (!isValid && error) {
      popoverVar.setPopover(error, 'error')
    }

    if (!error && isValid && isSubmitted) {
      popoverVar.setPopover(successMessage, 'success')
    }
  }, [successMessage, isSubmitted, isValid, error])
  return (
    <>
      <form onSubmit={onSubmitHandler} data-testid="form">
        {children}
      </form>

      {<ProgressBar loading={loading ?? isSubmitting} />}
    </>
  )
}

export default ControlForm
