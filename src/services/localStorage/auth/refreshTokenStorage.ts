import { Storage } from '../protocols'

export class RefreshTokenStorage implements Storage {
  get () {
    return localStorage.getItem('refreshToken')
  }

  set (refreshToken: string) {
    localStorage.setItem('refreshToken', refreshToken)
  }

  reset () {
    localStorage.removeItem('refreshToken')
  }
}
