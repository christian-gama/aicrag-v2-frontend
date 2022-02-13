import { makeVar, useReactiveVar } from '@apollo/client'
import { getUserByToken } from '@/services/token/getUserByToken'
import {
  makeAccessTokenStorage,
  makeRefreshTokenStorage
} from '@/external/factories/storage/auth'

const accessToken = makeAccessTokenStorage()
const refreshToken = makeRefreshTokenStorage()

const initialValue = {
  isAuthenticated: !!accessToken.get() && !!refreshToken.get(),
  isPartiallyAuthenticated: !!accessToken.get() && !refreshToken.get(),
  user: {
    personal: {
      email: getUserByToken('email')!,
      id: getUserByToken('userId')!,
      name: getUserByToken('name')!
    },
    settings: {
      role: 2,
      currency: getUserByToken('currency')!
    }
  }
}

const _authVar = makeVar(initialValue)

export const authVar = {
  login: (user: typeof initialValue['user']) => {
    _authVar({
      isPartiallyAuthenticated: false,
      isAuthenticated: true,
      user
    })
  },

  partialLogin: () => {
    refreshToken.reset()

    _authVar({
      isPartiallyAuthenticated: true,
      user: initialValue.user,
      isAuthenticated: false
    })
  },

  logout: () => {
    accessToken.reset()
    refreshToken.reset()

    _authVar({
      isPartiallyAuthenticated: false,
      user: initialValue.user,
      isAuthenticated: false
    })
  },

  setUser: (user: typeof initialValue['user']) => {
    _authVar({
      ..._authVar(),
      user
    })
  }
}

export const useAuth = () => useReactiveVar(_authVar)
