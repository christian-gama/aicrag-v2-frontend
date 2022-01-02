import IHandler from '@/domain/handler/handler.model'
import IValidation from '@/domain/validation/validation.model'
import { FormActionPayload, FormStates } from '@/application/models/context/form/protocols/form.model'
import ControlledInputProps from '../ControlledInput.model'
import useInput from '../useInput'

type Params = {
  dispatch: (options: FormActionPayload) => void
  event: React.FocusEvent<HTMLInputElement>
  inputState: ReturnType<typeof useInput>
  name: ControlledInputProps['name']
  data?: FormStates['form']['data']
  onBlur?: ControlledInputProps['onBlur']
  validator?: IValidation
}

const onBlurHandler: IHandler<Params> = (params): void => {
  const { dispatch, event, inputState, data, name, onBlur, validator } = params

  const value = event.currentTarget.value
  const error = validator?.validate(name, { ...data, [name]: value })

  inputState.setOnBlur(error)

  if (onBlur) onBlur(event)

  dispatch({ type: 'FORM/SET_FORM_DATA', payload: { data: { [name]: value } } })
  dispatch({ type: 'FORM/SET_IS_DIRTY', payload: { isDirty: true } })
  dispatch({ type: 'FORM/SET_IS_FOCUSED', payload: { isFocused: false } })
  dispatch({ type: 'FORM/SET_IS_CHANGING', payload: { isChanging: false } })
}

export default onBlurHandler
