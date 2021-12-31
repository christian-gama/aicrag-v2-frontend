import { Dispatch } from 'redux'
import IHandler from '@/domain/handler/handler.model'
import IValidation from '@/domain/validation/validation.model'
import { FormActions, FormProperties } from '@/application/models/form/protocols/form.model'
import ControlledInputProps from '../ControlledInput.model'
import useInput from '../useInput'

type Params = {
  dispatch: Dispatch
  event: React.ChangeEvent<HTMLInputElement>
  formData?: FormProperties['formData']
  inputState: ReturnType<typeof useInput>
  name: ControlledInputProps['name']
  onChange?: ControlledInputProps['onChange']
  setIsChanging: FormActions['setIsChanging']
  uniqueFormName?: ControlledInputProps['uniqueFormName']
  validation?: IValidation
}

const onChangeHandler: IHandler<Params> = (params): void => {
  const { dispatch, event, formData, inputState, name, onChange, setIsChanging, uniqueFormName, validation } = params

  const value = event.target.value
  const error = validation?.validate(name, { ...formData, [name]: value })

  inputState.setOnChange(error, value)

  if (onChange) onChange(event)

  dispatch(setIsChanging({ name: uniqueFormName!, isChanging: true }))
}

export default onChangeHandler
