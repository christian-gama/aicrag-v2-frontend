import { useEffect, useState } from 'react'
import * as classes from './stylesheet'

type CharCounterProps = {
  maxLength: number
  value: string
}

export const CharCounter: React.FC<CharCounterProps> = ({
  maxLength,
  value
}) => {
  const [valueLength, setValueLength] = useState(value.length)

  useEffect(() => {
    setValueLength(value.length)
  }, [value])

  return (
    <div
      className={classes.charCounter({ isValid: valueLength <= maxLength })}
      data-testid="char-counter"
    >{`${maxLength - valueLength}/${maxLength}`}</div>
  )
}
