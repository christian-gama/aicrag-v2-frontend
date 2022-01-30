import { makeVar, useReactiveVar } from '@apollo/client'
import {
  makeAccessTokenStorage,
  makeRefreshTokenStorage
} from '@/external/factories/storage/auth'

const accessToken = makeAccessTokenStorage().get()
const refreshToken = makeRefreshTokenStorage().get()

const initialValue = {
  isAuthenticated: !!accessToken && !!refreshToken,
  isPartiallyAuthenticated: !!accessToken && !refreshToken
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
