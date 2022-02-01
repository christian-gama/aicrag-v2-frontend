import { useEffect } from 'react'
import { IValidation } from '@/services/validators'
import { ProgressBar } from '@/components/atoms/ProgressBar'
import { popoverVar } from '@/external/graphql/reactiveVars'
import { useControlForm } from './hooks'

type ControlFormProps = {
  submitHandler: () => Promise<(() => void) | undefined> | Promise<void>
  validator?: IValidation
  successMessage?: string
  loading?: boolean
}

export const ControlForm: React.FC<ControlFormProps> = ({
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
      <form
        onSubmit={onSubmitHandler}
        data-testid="form"
        data-loading={loading ?? isSubmitting}
      >
        {children}
      </form>

      {<ProgressBar loading={loading ?? isSubmitting} />}
    </>
  )
}
