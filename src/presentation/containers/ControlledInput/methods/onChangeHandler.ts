import IHandler from '@/domain/handler/handler.model'
import IValidation from '@/domain/validation/validation.model'
import { FormActionPayload, FormStates } from '@/application/models/context/form/protocols/form.model'
import ControlledInputProps from '../ControlledInput.model'
import useInput from '../useInput'

type Params = {
  dispatch: (options: FormActionPayload) => void
  event: React.ChangeEvent<HTMLInputElement>
  formData?: FormStates['formData']
  inputState: ReturnType<typeof useInput>
  name: ControlledInputProps['name']
  onChange?: ControlledInputProps['onChange']
  validator?: IValidation
}

const onChangeHandler: IHandler<Params> = (params): void => {
  const { dispatch, event, formData, inputState, onChange, name, validator } = params

  const value = event.target.value
  const error = validator?.validate(name, { ...formData, [name]: value })

  inputState.setOnChange(error, value)

  if (onChange) onChange(event)

  dispatch({ type: 'SET_IS_CHANGING', payload: { isChanging: true } })
}

export default onChangeHandler
