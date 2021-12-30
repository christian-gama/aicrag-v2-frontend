import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formActions } from '@/application/models/form'
import { FormStates } from '@/application/models/form/protocols/form.model'
import { AppDispatch, RootState } from '@/application/store'
import Alert from '../../components/UI/Alert'
import Input from '../../components/UI/Input'
import FormProps from './form.model'
import onSubmitHandler from './methods/onSubmitHandler'

const Form: React.FC<FormProps> = (props) => {
  const { validation, children } = props

  const dispatch = useDispatch<AppDispatch>()

  const isValid = useSelector<RootState, FormStates['isValid']>((state) => state.form.isValid)
  const formData = useSelector<RootState, FormStates['formData']>((state) => state.form.formData)
  const errorMessage = useSelector<RootState, FormStates['errorMessage']>((state) => state.form.errorMessage)
  const isSubmitted = useSelector<RootState, FormStates['isSubmitted']>((state) => state.form.isSubmitted)

  const { setFormData, resetForm } = formActions

  useEffect(() => {
    resetForm()
  }, [])

  return (
    <>
      <form
        onSubmit={async (event) => await onSubmitHandler({ dispatch, event, formData, ...props, ...formActions })}
        data-testid="form"
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            return React.cloneElement(child, {
              validation,
              form: {
                data: formData,
                setData: setFormData
              }
            } as React.ComponentProps<typeof Input>)
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
