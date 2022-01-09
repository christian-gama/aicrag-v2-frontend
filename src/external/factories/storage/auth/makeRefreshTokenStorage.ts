import RefreshTokenStorage from '@/infra/localStorage/auth/refreshTokenStorage'

const makeRefreshTokenStorage = () => {
  return new RefreshTokenStorage()
}

export default makeRefreshTokenStorage
