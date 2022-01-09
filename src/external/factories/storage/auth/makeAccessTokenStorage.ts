import AccessTokenStorage from '@/infra/localStorage/auth/accessTokenStorage'

const makeAccessTokenStorage = () => {
  return new AccessTokenStorage()
}

export default makeAccessTokenStorage
