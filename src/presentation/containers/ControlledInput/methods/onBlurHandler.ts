import { Dispatch } from 'redux'
import IHandler from '@/domain/handler/handler.model'
import IValidation from '@/domain/validation/validation.model'
import { FormProperties, FormActions } from '@/application/models/form/protocols/form.model'
import ControlledInputProps from '../ControlledInput.model'
import useInput from '../useInput'

type Params = {
  dispatch: Dispatch
  event: React.FocusEvent<HTMLInputElement>
  formData?: FormProperties['formData']
  inputState: ReturnType<typeof useInput>
  name: ControlledInputProps['name']
  onBlur?: ControlledInputProps['onBlur']
  setFormData: FormActions['setFormData']
  setIsChanging: FormActions['setIsChanging']
  setIsDirty: FormActions['setIsDirty']
  setIsFocused: FormActions['setIsFocused']
  uniqueFormName?: ControlledInputProps['uniqueFormName']
  validation?: IValidation
}

const onBlurHandler: IHandler<Params> = (params): void => {
  const {
    dispatch,
    event,
    formData,
    inputState,
    name,
    onBlur,
    setFormData,
    setIsChanging,
    setIsDirty,
    setIsFocused,
    uniqueFormName,
    validation
  } = params

  const value = event.currentTarget.value
  const error = validation?.validate(name, { ...formData, [name]: value })

  inputState.setOnBlur(error)

  if (onBlur) onBlur(event)

  dispatch(setFormData({ [name]: inputState.value, name: uniqueFormName! }))
  dispatch(setIsDirty({ name: uniqueFormName!, isDirty: true }))
  dispatch(setIsFocused({ name: uniqueFormName!, isFocused: false }))
  dispatch(setIsChanging({ name: uniqueFormName!, isChanging: false }))
}

export default onBlurHandler
