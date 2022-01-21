import { makeVar, useReactiveVar } from '@apollo/client'
import makeAccessTokenStorage from '@/external/factories/storage/auth/makeAccessTokenStorage'
import makeRefreshTokenStorage from '@/external/factories/storage/auth/makeRefreshTokenStorage'

const initialValue = {
  isAuthenticated:
    !!makeAccessTokenStorage().get() && !!makeRefreshTokenStorage().get(),
  isPartiallyAuthenticated:
    !!makeAccessTokenStorage().get() && !makeRefreshTokenStorage().get()
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
