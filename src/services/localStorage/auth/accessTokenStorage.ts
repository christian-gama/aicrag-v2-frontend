import Storage from '@/services/localStorage/protocols/storage.model'

class AccessTokenStorage implements Storage {
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

export default AccessTokenStorage
