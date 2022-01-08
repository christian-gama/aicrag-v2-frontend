import Storage from '@/domain/storage/storage.model'

class RefreshTokenStorage implements Storage {
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

export default RefreshTokenStorage
