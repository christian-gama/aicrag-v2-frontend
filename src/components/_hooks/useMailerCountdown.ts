import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { mailerCountdownActions } from '@/context/models/mailerCountdown/mailerCountdown.actions'
import { MailerCountdownStates } from '@/context/models/mailerCountdown/protocols/mailerCountdown.model'
import { AppDispatch, RootState } from '@/context/store'

const useMailerCountdown = () => {
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

export default useMailerCountdown
