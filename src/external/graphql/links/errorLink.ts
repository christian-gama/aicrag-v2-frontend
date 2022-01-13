import translateError from '@/helpers/translateError'
import { onError } from '@apollo/client/link/error'
import NetworkError from '@/services/errors/connectionError'
import InternalError from '@/services/errors/internalError'
import makeAccessTokenStorage from '@/external/factories/storage/auth/makeAccessTokenStorage'
import makeRefreshTokenStorage from '@/external/factories/storage/auth/makeRefreshTokenStorage'
import { auth } from '../reactiveVars/auth'
import { errorVar } from '../reactiveVars/errorVar'

const errorLink = onError(({ networkError, graphQLErrors }) => {
  console.log('NETWORK ERROR', networkError)
  console.log('GRAPHQL ERROR', graphQLErrors)

  if (graphQLErrors && graphQLErrors.length > 0) {
    for (const error of graphQLErrors) {
      const errorCode = error.extensions.code

      if (errorCode === '401' && error.message.match(/token/gi)) {
        auth.logout()

        const accessToken = makeAccessTokenStorage()
        const refreshToken = makeRefreshTokenStorage()

        const wasPreviouslyLoggedIn = !!refreshToken.get()
        if (wasPreviouslyLoggedIn) {
          errorVar.setError('Sua sessão expirou. Por favor, entre novamente')
        }

        accessToken.reset()
        refreshToken.reset()

        return
      }
    }

    if (graphQLErrors[0].extensions.code === 'BAD_USER_INPUT') {
      errorVar.setError(new InternalError().message)

      return
    }

    if (!graphQLErrors[0].message.includes('token')) {
      errorVar.setError(translateError(graphQLErrors[0].message))

      return
    }

    return
  }

  if (networkError) {
    errorVar.setError(new NetworkError().message)
  }
})

export default errorLink
