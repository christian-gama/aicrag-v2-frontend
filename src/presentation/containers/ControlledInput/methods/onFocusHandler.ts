import { Dispatch } from 'redux'
import IHandler from '@/domain/handler/handler.model'
import IValidation from '@/domain/validation/validation.model'
import { FormActions, FormProperties } from '@/application/models/form/protocols/form.model'
import ControlledInputProps from '../ControlledInput.model'
import useInput from '../useInput'

type Params = {
  dispatch: Dispatch
  event: React.FocusEvent<HTMLInputElement>
  formData?: FormProperties['formData']
  inputState: ReturnType<typeof useInput>
  name: ControlledInputProps['name']
  onFocus?: ControlledInputProps['onFocus']
  setFormData: FormActions['setFormData']
  setIsFocused: FormActions['setIsFocused']
  uniqueFormName?: ControlledInputProps['uniqueFormName']
  validation?: IValidation
}

const onFocusHandler: IHandler<Params> = (params): void => {
  const {
    dispatch,
    event,
    formData,
    inputState,
    name,
    onFocus,
    setFormData,
    setIsFocused,
    uniqueFormName,
    validation
  } = params

  const value = event.currentTarget.value
  const error = validation?.validate(name, { ...formData, [name]: value })

  inputState.setOnFocus(error)

  if (onFocus) onFocus(event)

  dispatch(setFormData({ [name]: inputState.value, name: uniqueFormName! }))
  dispatch(setIsFocused({ name: uniqueFormName!, isFocused: true }))
}

export default onFocusHandler
