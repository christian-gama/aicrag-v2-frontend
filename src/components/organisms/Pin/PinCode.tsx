import { Dispatch, SetStateAction } from 'react'
import { Button } from '@/components/atoms/Button'
import { ProgressBar } from '@/components/atoms/ProgressBar'
import { usePinCode } from './hooks/usePinCode'
import * as classes from './stylesheet'

type PinCodeProps = {
  setStepsHandler: Dispatch<SetStateAction<number>>
}
export const PinCode: React.FC<PinCodeProps> = ({ setStepsHandler }) => {
  const {
    resendEmailHandler,
    onKeyPressHandler,
    timeLeftInSeconds,
    onChangeHandler,
    onSubmitHandler,
    selectLastChar,
    isOnCountdown,
    inputError,
    formState,
    values
  } = usePinCode({ setStepsHandler })

  const pinInputClass = classes.pinInput({
    state: inputError ? 'error' : 'default'
  })

  const mappedInputs = values.map((value, index) => (
    <input
      onChange={(event) => onChangeHandler(event.target.value, index)}
      onKeyDown={(event) => onKeyPressHandler(event.key, index)}
      className={pinInputClass}
      onClick={selectLastChar}
      onFocus={selectLastChar}
      data-testid="pin-input"
      autoFocus={index === 0}
      data-index={index}
      value={value}
      key={index}
      type="text"
    />
  ))

  return (
    <>
      <form
        className={classes.pinCodeWrapper}
        onSubmit={onSubmitHandler}
        data-testid="form"
      >
        <div className={classes.pinCode}>{mappedInputs}</div>

        <Button
          disabled={
            isOnCountdown ||
            formState.isSubmitted ||
            formState.isLoading.activateAccount
          }
          loading={formState.isLoading.sendWelcome}
          onClick={resendEmailHandler}
          style={{ size: 'lg' }}
        >
          {isOnCountdown ? `${timeLeftInSeconds} s` : 'Reenviar email'}
        </Button>
      </form>

      <ProgressBar loading={formState.isLoading.activateAccount} />
    </>
  )
}
