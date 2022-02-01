import { FocusEvent, MouseEvent, useState } from 'react'
import { Button } from '@/components/atoms/Button'
import * as classes from './stylesheet'

export const PinCode: React.FC = () => {
  const [values, setValues] = useState<string[]>(
    Array.from({ length: 5 }).fill('', 0, 5) as string[]
  )

  const getInput = (index: number) =>
    document.querySelector(`input[data-index="${index}"]`) as HTMLElement

  const onChangeHandler = (value: string, index: number) => {
    if (value.length >= 5) {
      return setValues(values.map((_, i) => value.split('')[i]))
    }

    if (value.length <= 2) {
      const lastChar = value.charAt(value.length - 1)
      setValues(values.map((v, i) => (i === index ? lastChar : v)))

      if (index < 4 && value !== '') {
        getInput(index + 1).focus()
      }
    }
  }

  const inputNavigation = (index: number, key: string) => {
    if (index < 4) {
      if (key === 'ArrowRight' || key === 'Delete') {
        getInput(index + 1).focus()
      }
    }

    if (index > 0) {
      if (key === 'ArrowLeft') {
        getInput(index - 1).focus()
      }

      if (key === 'Backspace' && values[index] === '') {
        getInput(index - 1).focus()
      }
    }
  }

  const onKeyPressHandler = (key: string, index: number) => {
    if (key === 'Backspace' || key === 'Delete') {
      setValues((prev) => prev.map((v, i) => (i === index ? '' : v)))
    }

    if (key === 'Backspace' && values[index] === '') {
      setValues((prev) => {
        prev[index - 1] = ''
        return prev
      })
    }

    inputNavigation(index, key)
  }

  const selectLastChar = ({
    currentTarget
  }: FocusEvent<HTMLInputElement> | MouseEvent<HTMLInputElement>) =>
    currentTarget.setSelectionRange(
      currentTarget.value.length,
      currentTarget.value.length
    )

  return (
    <div className={classes.pinCodeWrapper}>
      <div className={classes.pinCode}>
        {values.map((value, index) => (
          <input
            onChange={(event) => onChangeHandler(event.target.value, index)}
            onKeyDown={(event) => onKeyPressHandler(event.key, index)}
            className={classes.pinInput({ state: 'default' })}
            onClick={selectLastChar}
            onFocus={selectLastChar}
            data-testid="pin-input"
            autoFocus={index === 0}
            data-index={index}
            value={value}
            key={index}
            type="text"
          />
        ))}
      </div>

      <Button style={{ size: 'lg' }}>Reenviar código</Button>
    </div>
  )
}
