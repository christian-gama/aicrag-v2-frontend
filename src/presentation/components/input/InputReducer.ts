type InputAction = {
  type: 'SET_TYPE' | 'SET_ERROR' | 'SET_IS_FOCUSED' | 'SET_IS_TOUCHED' | 'SET_IS_VALID' | 'SET_VALUE'
  payload: {
    type?: 'text' | 'email' | 'password' | 'number'
    validator?: {
      field?: string
      error?: string
      isValid?: boolean
    }
    value?: string
    isFocused?: boolean
    isTouched?: boolean
  }
}

const InputInitialState = {
  currentType: 'text',
  error: '',
  isFocused: false,
  isTouched: false,
  isValid: false,
  value: ''
}

const InputReducer = (state: typeof InputInitialState, action: InputAction): typeof InputInitialState => {
  const { type, payload } = action

  switch (type) {
    case 'SET_TYPE':
      return {
        ...state,
        currentType: payload.type
      }

    case 'SET_ERROR':
      return {
        ...state,
        error: payload.validator?.error
      }

    case 'SET_IS_FOCUSED':
      return {
        ...state,
        isFocused: payload.isFocused
      }

    case 'SET_IS_TOUCHED':
      return {
        ...state,
        isTouched: payload.isTouched
      }

    case 'SET_IS_VALID':
      return {
        ...state,
        isValid: payload.validator?.isValid
      }

    case 'SET_VALUE':
      return {
        ...state,
        value: payload.value
      }
  }
}

export { InputReducer, InputInitialState }
