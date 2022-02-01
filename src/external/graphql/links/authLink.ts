import { ApolloLink, FetchResult } from '@apollo/client'
import {
  makeAccessTokenStorage,
  makeRefreshTokenStorage
} from '@/external/factories/storage/auth'

export const authLink = new ApolloLink((operation, forward) => {
  const { getContext, setContext } = operation
  const accessTokenStorage = makeAccessTokenStorage()
  const refreshTokenStorage = makeRefreshTokenStorage()

  const setTokensInResponseHeaders = (prevContext: any) => {
    return {
      ...prevContext,

      headers: {
        ...prevContext.headers,
        'x-access-token': accessTokenStorage.get(),
        'x-refresh-token': refreshTokenStorage.get()
      }
    }
  }

  const handleTokenStorage = (response: FetchResult) => {
    const {
      response: { headers }
    } = getContext()

    if (headers) {
      const accessToken = headers.get('x-access-token') as string
      if (accessToken) {
        accessTokenStorage.set(accessToken)
      }

      const refreshToken = headers.get('x-refresh-token') as string
      if (refreshToken) {
        refreshTokenStorage.set(refreshToken)
      }
    }

    return response
  }

  setContext(setTokensInResponseHeaders)

  return forward(operation).map(handleTokenStorage)
})
