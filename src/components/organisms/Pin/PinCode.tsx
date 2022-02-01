import { Dispatch, SetStateAction } from 'react'
import { Button } from '@/components/atoms/Button'
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
    isLoading,
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
    <form
      className={classes.pinCodeWrapper}
      onSubmit={onSubmitHandler}
      data-testid="form"
    >
      <div className={classes.pinCode}>{mappedInputs}</div>

      <Button
        loading={isLoading}
        style={{ size: 'lg' }}
        onClick={resendEmailHandler}
        disabled={isOnCountdown}
      >
        {isOnCountdown ? `${timeLeftInSeconds} s` : 'Reenviar email'}
      </Button>
    </form>
  )
}
