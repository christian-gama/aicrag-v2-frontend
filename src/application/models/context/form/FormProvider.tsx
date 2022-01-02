import React, { useReducer } from 'react'
import FormContainer from '@/presentation/containers/Form'
import FormProps from '@/presentation/containers/Form/form.model'
import FormContext, { initialFormState } from './FormContext'
import formReducer from './formReducer'

const FormProvider: React.FC<FormProps> = (props) => {
  const [state, dispatch] = useReducer(formReducer, initialFormState)

  return (
    <FormContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <FormContainer submitHandler={props.submitHandler} validator={props.validator}>
        {props.children}
      </FormContainer>
    </FormContext.Provider>
  )
}

export default FormProvider
