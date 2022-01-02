import React from 'react'
import IValidation from '@/domain/validation/validation.model'
import { FormActionPayload, FormStates } from '@/application/models/context/form/protocols/form.model'

type Params = {
  dispatch: (options: FormActionPayload) => void
  data?: FormStates['form']['data']
  validator?: IValidation
  setIsPopoverOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const handleValidation = (params: Params) => {
  const { validator, dispatch, data, setIsPopoverOpen } = params

  dispatch({ type: 'FORM/SET_IS_VALIDATING', payload: { isValidating: true } })

  if (validator) {
    for (const key in data) {
      const error = validator.validate(key, data)

      if (error) {
        dispatch({ type: 'FORM/SET_ERROR', payload: { error } })
        dispatch({ type: 'FORM/SET_IS_VALID', payload: { isValid: false } })
        dispatch({ type: 'FORM/SET_IS_VALIDATING', payload: { isValidating: false } })
        setIsPopoverOpen(true)

        return error
      }
    }
  }

  dispatch({ type: 'FORM/SET_IS_VALIDATING', payload: { isValidating: false } })
  dispatch({ type: 'FORM/SET_IS_VALID', payload: { isValid: true } })
  setIsPopoverOpen(false)
}

export default handleValidation
