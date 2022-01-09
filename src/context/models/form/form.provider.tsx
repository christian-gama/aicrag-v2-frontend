import React, { useReducer } from 'react'
import FormContext, { initialFormState } from './form.context'
import formReducer from './form.reducer'

const FormProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(formReducer, initialFormState)

  return (
    <FormContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {props.children}
    </FormContext.Provider>
  )
}

export default FormProvider
