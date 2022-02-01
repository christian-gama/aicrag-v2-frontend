import { Storage } from '../protocols'

export class AccessTokenStorage implements Storage {
  get () {
    return localStorage.getItem('accessToken')
  }

  set (accessToken: string) {
    localStorage.setItem('accessToken', accessToken)
  }

  reset () {
    localStorage.removeItem('accessToken')
  }
}
