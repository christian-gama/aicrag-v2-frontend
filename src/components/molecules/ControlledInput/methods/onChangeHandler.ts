import IHandler from '@/domain/handler/handler.model'
import IValidation from '@/domain/validation/validation.model'
import { FormActionPayload, FormInputActionPayload, FormStates } from '@/context/models/form/protocols/form.model'
import ControlledInputProps from '../ControlledInput.model'

type Params = {
  dispatch: (options: FormActionPayload | FormInputActionPayload) => void
  event: React.ChangeEvent<HTMLInputElement>
  data?: FormStates['form']['data']
  name: ControlledInputProps['name']
  onChange?: ControlledInputProps['onChange']
  validator?: IValidation
  isTouched: boolean
}

const onChangeHandler: IHandler<Params> = (params): void => {
  const { dispatch, event, data, onChange, name, validator, isTouched } = params

  const value = event.target.value
  const error = validator?.validate(name, { ...data, [name]: value })

  dispatch({ type: 'INPUT/SET_VALUE', payload: { value: { [name]: value } } })
  dispatch({ type: 'INPUT/SET_IS_VALID', payload: { isValid: { [name]: !error } } })

  if (isTouched) dispatch({ type: 'INPUT/SET_ERROR', payload: { error: { [name]: error } } })

  if (onChange) onChange(event)

  dispatch({ type: 'FORM/SET_IS_CHANGING', payload: { isChanging: true } })
  dispatch({ type: 'FORM/SET_FORM_DATA', payload: { data: { [name]: value } } })
}

export default onChangeHandler
