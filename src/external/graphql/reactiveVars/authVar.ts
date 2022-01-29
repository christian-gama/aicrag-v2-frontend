import { makeVar, useReactiveVar } from '@apollo/client'

const initialValue = {
  isAuthenticated: false,
  isPartiallyAuthenticated: false
}

const _authVar = makeVar(initialValue)

export const authVar = {
  login: () =>
    _authVar({ isAuthenticated: true, isPartiallyAuthenticated: false }),
  logout: () =>
    _authVar({ isAuthenticated: false, isPartiallyAuthenticated: false }),
  partialLogin: () =>
    _authVar({ isAuthenticated: false, isPartiallyAuthenticated: true })
}

export const useAuth = () => useReactiveVar(_authVar)
