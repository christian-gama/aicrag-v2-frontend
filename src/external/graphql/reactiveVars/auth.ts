import { makeVar, useReactiveVar } from '@apollo/client'
import makeAccessTokenStorage from '@/external/factories/storage/auth/makeAccessTokenStorage'
import makeRefreshTokenStorage from '@/external/factories/storage/auth/makeRefreshTokenStorage'

const initialValue = {
  isAuthenticated: !!makeAccessTokenStorage().get() && !!makeRefreshTokenStorage().get(),
  isPartiallyAuthenticated: !!makeAccessTokenStorage().get() && !makeRefreshTokenStorage().get()
}

const authVar = makeVar(initialValue)

export const auth = {
  login: () => authVar({ isAuthenticated: true, isPartiallyAuthenticated: false }),
  logout: () => authVar({ isAuthenticated: false, isPartiallyAuthenticated: false }),
  partialLogin: () => authVar({ isAuthenticated: false, isPartiallyAuthenticated: true })
}

export const useAuth = () => useReactiveVar(authVar)
