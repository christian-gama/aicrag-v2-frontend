import jwtDecode from 'jwt-decode'
import { makeAccessTokenStorage } from '@/external/factories/storage/auth'

export const getUserIdByAccessToken = () => {
  const accessToken = makeAccessTokenStorage().get()

  return accessToken ? jwtDecode<{ userId: string }>(accessToken).userId : null
}
