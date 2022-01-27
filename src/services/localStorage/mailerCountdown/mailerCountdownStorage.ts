import { DateTime } from 'luxon'
import Storage from '@/services/localStorage/protocols/storage.model'

class MailerCountdownStorage implements Storage {
  get () {
    return localStorage.getItem('mailerCountdown')
  }

  set (timeLeftinSeconds: string) {
    const expiresAt = DateTime.now()
      .plus({ seconds: Number(timeLeftinSeconds) })
      .toJSDate()
      .toISOString()

    localStorage.setItem('mailerCountdown', expiresAt)
  }

  reset () {
    localStorage.removeItem('mailerCountdown')
  }
}

export default MailerCountdownStorage
