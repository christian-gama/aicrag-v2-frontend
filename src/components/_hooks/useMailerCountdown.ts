import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  MailerCountdownStates,
  mailerCountdownActions
} from '@/context/models/mailerCountdown'
import { AppDispatch, RootState } from '@/context/store'

export const useMailerCountdown = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { isOnCountdown, timeLeftInSeconds } = useSelector<
  RootState,
  MailerCountdownStates
  >((state) => state.mailerCountdown)

  const { setTimeLeft, stopCountdown, verifyCountdown } = mailerCountdownActions

  useEffect(() => {
    if (!isOnCountdown) {
      dispatch(verifyCountdown())
    }

    let timeLeft = timeLeftInSeconds

    if (isOnCountdown) {
      /* istanbul ignore next */
      const interval = setInterval(() => {
        if (timeLeft <= 0) {
          dispatch(stopCountdown())
        }

        dispatch(setTimeLeft({ time: --timeLeft }))
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [isOnCountdown])
}
