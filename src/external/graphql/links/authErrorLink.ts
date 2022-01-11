import { onError } from '@apollo/client/link/error'
import makeAccessTokenStorage from '@/external/factories/storage/auth/makeAccessTokenStorage'
import makeRefreshTokenStorage from '@/external/factories/storage/auth/makeRefreshTokenStorage'
import { auth } from '../reactiveVars/auth'

const authErrorLink = onError(({ networkError }) => {
  const error = networkError as any

  if (error?.result?.errors[0]?.extensions?.code === '401') {
    const accessToken = makeAccessTokenStorage()
    const refreshToken = makeRefreshTokenStorage()

    accessToken.reset()
    refreshToken.reset()
    auth.logout()
  }
})

export default authErrorLink
