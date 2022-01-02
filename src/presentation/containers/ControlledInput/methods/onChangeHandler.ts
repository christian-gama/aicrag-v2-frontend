import IHandler from '@/domain/handler/handler.model'
import IValidation from '@/domain/validation/validation.model'
import { FormActionPayload, FormStates } from '@/application/models/context/form/protocols/form.model'
import ControlledInputProps from '../ControlledInput.model'
import useInput from '../useInput'

type Params = {
  dispatch: (options: FormActionPayload) => void
  event: React.ChangeEvent<HTMLInputElement>
  data?: FormStates['form']['data']
  inputState: ReturnType<typeof useInput>
  name: ControlledInputProps['name']
  onChange?: ControlledInputProps['onChange']
  validator?: IValidation
}

const onChangeHandler: IHandler<Params> = (params): void => {
  const { dispatch, event, inputState, data, onChange, name, validator } = params

  const value = event.target.value
  const error = validator?.validate(name, { ...data, [name]: value })

  inputState.setOnChange(error, value)

  if (onChange) onChange(event)

  dispatch({ type: 'FORM/SET_IS_CHANGING', payload: { isChanging: true } })
  dispatch({ type: 'FORM/SET_FORM_DATA', payload: { data: { [name]: value } } })
}

export default onChangeHandler
