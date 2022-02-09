import { DateTime } from 'luxon'
import { Storage } from '../protocols'

export class MailerCountdownStorage implements Storage {
  get () {
    return localStorage.getItem('mailerCountdown')
  }

  set (timeLeftinSeconds: string) {
    const expiresAt = DateTime.now()
      .plus({ seconds: Number(timeLeftinSeconds) })
      .toISO()

    localStorage.setItem('mailerCountdown', expiresAt)
  }

  reset () {
    localStorage.removeItem('mailerCountdown')
  }
}
