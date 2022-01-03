import React from 'react'
import IValidation from '@/domain/validation/validation.model'
import {
  FormActionPayload,
  FormInputActionPayload,
  FormStates
} from '@/application/models/context/form/protocols/form.model'

type Params = {
  dispatch: (options: FormActionPayload | FormInputActionPayload) => void
  data?: FormStates['form']['data']
  validator?: IValidation
  setIsPopoverOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const handleValidation = (params: Params) => {
  const { validator, dispatch, data, setIsPopoverOpen } = params

  dispatch({ type: 'FORM/SET_IS_VALIDATING', payload: { isValidating: true } })

  if (validator) {
    for (const field in data) {
      const error = validator.validate(field, data)

      if (error) {
        dispatch({
          type: 'FORM/SET_ERROR',
          payload: { error: 'Não foi possível continuar, pois há erros que precisam ser corrigidos.' }
        })
        dispatch({ type: 'FORM/SET_IS_VALID', payload: { isValid: false } })
        dispatch({ type: 'FORM/SET_IS_VALIDATING', payload: { isValidating: false } })
        dispatch({ type: 'INPUT/SET_ERROR', payload: { error: { [field]: error } } })
        dispatch({ type: 'INPUT/SET_IS_TOUCHED', payload: { isTouched: { [field]: true } } })
        dispatch({ type: 'INPUT/SET_IS_VALID', payload: { isValid: { [field]: false } } })
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
