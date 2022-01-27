import { mailerCountdownActions } from '../mailerCountdown.actions'

export type MailerCountdownStates = {
  timeLeftInSeconds: number
  isOnCountdown: boolean
}

export type MailerCountdownActions = typeof mailerCountdownActions

export type SetTimePayload = {
  payload: {
    time: number
  }
}
