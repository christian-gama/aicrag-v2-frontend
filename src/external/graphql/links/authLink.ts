import { ApolloLink } from '@apollo/client'
import makeAccessTokenStorage from '@/external/factories/storage/auth/makeAccessTokenStorage'
import makeRefreshTokenStorage from '@/external/factories/storage/auth/makeRefreshTokenStorage'

const authLink = new ApolloLink((operation, forward) => {
  const accessTokenStorage = makeAccessTokenStorage()
  const refreshTokenStorage = makeRefreshTokenStorage()

  operation.setContext((prevContext: any) => {
    return {
      ...prevContext,

      headers: {
        ...prevContext.headers,
        'x-access-token': accessTokenStorage.get(),
        'x-refresh-token': refreshTokenStorage.get()
      }
    }
  })

  return forward(operation).map((response) => {
    const context = operation.getContext()
    const headers = context.response.headers

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
  })
})

export default authLink
