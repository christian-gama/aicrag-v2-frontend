import React, { useEffect } from 'react'
import IValidation from '@/services/validators/protocols/validation.model'
import { popoverVar } from '@/external/graphql/reactiveVars/popoverVar'
import ProgressBar from '../../atoms/ProgressBar'
import useControlForm from './hooks/useControlForm'

type PostSubmitFn = VoidFunction

type ControlFormProps = {
  submitHandler: () => Promise<PostSubmitFn> | Promise<void>
  validator?: IValidation
  successMessage?: string
  loading?: boolean
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
      if (successMessage) popoverVar.setPopover(successMessage, 'success')
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
