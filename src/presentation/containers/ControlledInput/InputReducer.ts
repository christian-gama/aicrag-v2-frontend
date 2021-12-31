import { Reducer } from 'react'
import Optional from '@/application/utils/typescript/optional.model'

type InputAction = {
  type: 'SET_TYPE' | 'SET_ERROR' | 'SET_IS_FOCUSED' | 'SET_IS_TOUCHED' | 'SET_IS_VALID' | 'SET_VALUE'
  payload: {
    error?: string
    isFocused?: boolean
    isTouched?: boolean
    type?: 'text' | 'email' | 'password' | 'number'
    value?: string
  }
}

const InputInitialState = {
  currentType: 'text' as InputAction['payload']['type'],
  error: undefined as InputAction['payload']['error'],
  isFocused: false,
  isTouched: false,
  isValid: false,
  value: ''
}

const InputReducer: Reducer<Optional<typeof InputInitialState>, InputAction> = (state, action) => {
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
        error: payload.error
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
        isValid: payload.error === undefined
      }

    case 'SET_VALUE':
      return {
        ...state,
        value: payload.value
      }
  }
}

export { InputReducer, InputInitialState }
