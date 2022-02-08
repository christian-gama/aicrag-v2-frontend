import { useReducer } from 'react'
import { FormContext } from '.'
import { initialFormState } from './form.context'
import { formReducer } from './form.reducer'

export const FormProvider: React.FC = (props) => {
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
