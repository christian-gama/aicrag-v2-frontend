import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formActions } from '@/application/models/form'
import { FormProperties } from '@/application/models/form/protocols/form.model'
import { AppDispatch, RootState } from '@/application/store'
import Maybe from '@/application/utils/typescript/maybe.model'
import Alert from '../../components/UI/Alert'
import ControlledInputProps from '../ControlledInput/ControlledInput.model'
import FormProps from './form.model'
import onSubmitHandler from './methods/onSubmitHandler'

const Form: React.FC<FormProps> = (props) => {
  const { validation, children, name, submitHandler } = props

  const dispatch = useDispatch<AppDispatch>()

  const isValid = useSelector<RootState, Maybe<FormProperties['isValid']>>(
    (state) => state.form.forms.find((form) => form.name === name)?.isValid
  )
  const formData = useSelector<RootState, Maybe<FormProperties['formData']>>(
    (state) => state.form.forms.find((form) => form.name === name)?.formData
  )
  const errorMessage = useSelector<RootState, Maybe<FormProperties['errorMessage']>>(
    (state) => state.form.forms.find((form) => form.name === name)?.errorMessage
  )
  const isSubmitted = useSelector<RootState, Maybe<FormProperties['isSubmitted']>>(
    (state) => state.form.forms.find((form) => form.name === name)?.isSubmitted
  )

  const { resetForm, init } = formActions

  useEffect(() => {
    dispatch(init(name))
    dispatch(resetForm(name))
  }, [])

  return (
    <>
      <form
        onSubmit={async (event) =>
          await onSubmitHandler({
            dispatch,
            event,
            name,
            submitHandler,
            validation,
            formData,
            ...formActions
          })
        }
        data-testid="form"
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            return React.cloneElement(child, {
              validation,
              uniqueFormName: name
            } as ControlledInputProps)
          }

          return child
        })}
      </form>

      {!isValid && errorMessage && isSubmitted && (
        <Alert isOpen mode="cancelOnly" message={errorMessage} title="Algo deu errado..." type="danger" />
      )}
    </>
  )
}

export default Form
