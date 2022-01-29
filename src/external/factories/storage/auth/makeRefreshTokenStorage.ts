import { RefreshTokenStorage } from '@/services/localStorage/auth'

export const makeRefreshTokenStorage = () => {
  return new RefreshTokenStorage()
}
