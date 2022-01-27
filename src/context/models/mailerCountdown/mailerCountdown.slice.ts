import { createSlice } from '@reduxjs/toolkit'
import { DateTime } from 'luxon'
import makeMailerCountdownStorage from '@/external/factories/storage/mailerCountdown/makeMailerCountdown'
import {
  MailerCountdownStates,
  SetTimeLeftPayload
} from './protocols/mailerCountdown.model'

const mailerCountdownStorage = makeMailerCountdownStorage()

const initialMailerCountdownState: MailerCountdownStates = {
  timeLeftInSeconds:
    mailerCountdownStorage.get() !== null
      ? Math.ceil(
        DateTime.fromISO(mailerCountdownStorage.get()!).toSeconds() -
            DateTime.now().toSeconds()
      )
      : 60,
  isOnCountdown:
    mailerCountdownStorage.get() !== null
      ? DateTime.fromISO(mailerCountdownStorage.get()!).toMillis() <
        DateTime.now().toMillis()
      : true
}

const mailerCountdownSlice = createSlice({
  name: 'mailerCountdown',
  initialState: initialMailerCountdownState,
  reducers: {
    startCountdown: (state) => {
      state.timeLeftInSeconds = 60
      state.isOnCountdown = true
      mailerCountdownStorage.set(state.timeLeftInSeconds.toString())
    },
    stopCountdown: (state) => {
      mailerCountdownStorage.reset()
      state.isOnCountdown = false
    },
    setTimeLeft: (state, action: SetTimeLeftPayload) => {
      state.timeLeftInSeconds = action.payload.timeLeftInSeconds
    },
    verifyCountdown: (state) => {
      console.log(mailerCountdownStorage.get())
      const isExpired =
        mailerCountdownStorage.get() !== null
          ? DateTime.fromISO(mailerCountdownStorage.get()!).toMillis() <
            DateTime.now().toMillis()
          : true

      if (isExpired) {
        console.log('isExpired', isExpired)
        state.isOnCountdown = false
        state.timeLeftInSeconds = 0
        mailerCountdownStorage.reset()
      } else {
        state.isOnCountdown = true
        state.timeLeftInSeconds =
          mailerCountdownStorage.get() !== null
            ? Math.ceil(
              DateTime.fromISO(mailerCountdownStorage.get()!).toSeconds() -
                  DateTime.now().toSeconds()
            )
            : 60
      }
    }
  }
})

export default mailerCountdownSlice
