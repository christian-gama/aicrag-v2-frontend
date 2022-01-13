import { makeVar, useReactiveVar } from '@apollo/client'

type InitialValue =
  | {
    isOpen: true
    message: string
  }
  | {
    isOpen: false
    message: null
  }

const initialValue: InitialValue = {
  isOpen: false,
  message: null
}

const _errorVar = makeVar(initialValue as InitialValue)

export const errorVar = {
  isOpen: _errorVar().isOpen,
  message: _errorVar().message,
  setError: (message: string) => _errorVar({ isOpen: true, message }),
  reset: () => _errorVar({ isOpen: false, message: null })
}

export const useErrorVar = () => useReactiveVar(_errorVar)
