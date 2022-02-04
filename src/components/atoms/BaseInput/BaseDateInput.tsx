import { CalendarIcon } from '@/components/utils/icons/CalendarIcon'
import * as classes from './stylesheet'

type BaseDateInputProps = {
  isFocused?: boolean
  isTouched?: boolean
  value?: string
  label: string
  name: string
}

export const BaseDateInput: React.FC<BaseDateInputProps> = ({
  isFocused,
  label,
  value,
  name
}) => {
  const labelStyle = classes.labelRecipe({
    float: !!isFocused || value !== '',
    state: 'default'
  })

  const inputStyle = classes.inputRecipe({
    state: 'default',
    hasIcon: true
  })

  return (
    <div className={classes.input} data-testid={'base-date-input-wrapper'}>
      <div className={classes.inputContent}>
        <label
          data-testid={'base-date-input-label'}
          htmlFor={name}
          className={labelStyle}
        >
          {label}
        </label>

        <div className={classes.inputBox}>
          <input
            data-testid={'base-date-input'}
            className={inputStyle}
            placeholder=" "
            value={value}
            name={name}
            type="text"
            id={name}
            readOnly
          />

          <div
            data-testid={'base-date-input-icon'}
            className={classes.inputIcon}
          >
            <CalendarIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
