import { onError } from '@apollo/client/link/error'
import translateError from '@/helpers/translateError'
import NetworkError from '@/services/errors/connectionError'
import InternalError from '@/services/errors/internalError'
import makeAccessTokenStorage from '@/external/factories/storage/auth/makeAccessTokenStorage'
import makeRefreshTokenStorage from '@/external/factories/storage/auth/makeRefreshTokenStorage'
import { authVar } from '../reactiveVars/authVar'
import { popoverVar } from '../reactiveVars/popoverVar'

const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (graphQLErrors && graphQLErrors.length > 0) {
    for (const error of graphQLErrors) {
      const errorCode = error.extensions.code

      if (errorCode === '401' && error.message.match(/token/gi)) {
        authVar.logout()

        const accessToken = makeAccessTokenStorage()
        const refreshToken = makeRefreshTokenStorage()

        const wasPreviouslyLoggedIn = !!refreshToken.get()
        if (wasPreviouslyLoggedIn) {
          popoverVar.setPopover(
            'Sua sessão expirou. Por favor, entre novamente',
            'error'
          )
        }

        accessToken.reset()
        refreshToken.reset()

        return
      }
    }

    if (graphQLErrors[0].extensions.code === 'BAD_USER_INPUT') {
      popoverVar.setPopover(new InternalError().message, 'error')

      return
    }

    if (!graphQLErrors[0].message.includes('token')) {
      popoverVar.setPopover(translateError(graphQLErrors[0].message), 'error')

      return
    }

    return
  }

  if (networkError) {
    popoverVar.setPopover(new NetworkError().message, 'error')
  }
})

export default errorLink
