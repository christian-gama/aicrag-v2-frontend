import { useState } from 'react'
import { Button } from '@/components/atoms/Button'
import * as classes from './stylesheet'

export const PinCode: React.FC = () => {
  const [values, setValues] = useState<string[]>(
    Array.from({ length: 5 }).fill('', 0, 5) as string[]
  )

  const onChangeHandler = (value: string, index: number) => {
    const firstCharacter = value.charAt(0)
    setValues((prev) => prev.map((v, i) => (i === index ? firstCharacter : v)))
  }

  return (
    <div className={classes.pinCodeWrapper}>
      <div className={classes.pinCode}>
        {values.map((value, index) => (
          <input
            onChange={(event) => onChangeHandler(event.target.value, index)}
            className={classes.pinInput({ state: 'default' })}
            data-testid="pin-input"
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
