import { ApolloLink } from '@apollo/client'
import makeAccessTokenStorage from '@/main/factories/storage/auth/makeAccessTokenStorage'
import makeRefreshTokenStorage from '@/main/factories/storage/auth/makeRefreshTokenStorage'

const authLink = new ApolloLink((operation, forward) => {
  const accessTokenStorage = makeAccessTokenStorage()
  const refreshTokenStorage = makeRefreshTokenStorage()

  operation.setContext((prevContext: any) => {
    return {
      ...prevContext,

      headers: {
        ...prevContext.headers,
        'X-Access-Token': accessTokenStorage.get(),
        'X-Refresh-Token': refreshTokenStorage.get()
      }
    }
  })

  return forward(operation).map((response) => {
    const context = operation.getContext()
    const headers = context.response.headers

    if (headers) {
      const accessToken = headers.get('X-Access-Token') as string

      if (accessToken) {
        accessTokenStorage.set(accessToken)
      }

      const refreshToken = headers.get('X-Refresh-Token') as string
      if (refreshToken) {
        refreshTokenStorage.set(refreshToken)
      }
    }

    return response
  })
})

export default authLink
