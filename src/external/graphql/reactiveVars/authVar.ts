import { makeVar, useReactiveVar } from '@apollo/client'
import {
  makeAccessTokenStorage,
  makeRefreshTokenStorage
} from '@/external/factories/storage/auth'

const accessToken = makeAccessTokenStorage()
const refreshToken = makeRefreshTokenStorage()

const initialValue = {
  isAuthenticated: !!accessToken.get() && !!refreshToken.get(),
  isPartiallyAuthenticated: !!accessToken.get() && !refreshToken.get()
}

const _authVar = makeVar(initialValue)

export const authVar = {
  login: () => {
    _authVar({ isAuthenticated: true, isPartiallyAuthenticated: false })
  },

  partialLogin: () => {
    refreshToken.reset()

    _authVar({ isAuthenticated: false, isPartiallyAuthenticated: true })
  },

  logout: () => {
    accessToken.reset()
    refreshToken.reset()

    _authVar({ isAuthenticated: false, isPartiallyAuthenticated: false })
  }
}

export const useAuth = () => useReactiveVar(_authVar)
