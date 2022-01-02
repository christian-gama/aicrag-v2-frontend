import IHandler from '@/domain/handler/handler.model'
import IValidation from '@/domain/validation/validation.model'
import { FormActionPayload, FormStates } from '@/application/models/context/form/protocols/form.model'
import ControlledInputProps from '../ControlledInput.model'
import useInput from '../useInput'

type Params = {
  dispatch: (options: FormActionPayload) => void
  event: React.FocusEvent<HTMLInputElement>
  inputState: ReturnType<typeof useInput>
  data?: FormStates['form']['data']
  name: ControlledInputProps['name']
  onFocus?: ControlledInputProps['onFocus']
  validator?: IValidation
}

const onFocusHandler: IHandler<Params> = (params): void => {
  const { dispatch, event, inputState, data, name, onFocus, validator } = params

  const value = event.currentTarget.value
  const error = validator?.validate(name, { ...data, [name]: value })

  inputState.setOnFocus(error)

  if (onFocus) onFocus(event)

  dispatch({ type: 'FORM/SET_FORM_DATA', payload: { data: { [name]: value } } })
  dispatch({ type: 'FORM/SET_IS_FOCUSED', payload: { isFocused: true } })
}

export default onFocusHandler
