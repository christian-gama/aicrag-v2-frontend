import { CalendarIcon } from '@/components/utils/icons/CalendarIcon'
import * as classes from './stylesheet'

type BaseDateInputProps = {
  value?: string | number | string[] | undefined
  onClick?: () => void
  onFocus?: () => void
  autoFocus?: boolean
  isFocused?: boolean
  onBlur?: () => void
  label: string
  name: string
}

export const BaseDateInput: React.FC<BaseDateInputProps> = ({
  autoFocus,
  isFocused,
  onClick,
  onFocus,
  onBlur,
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
    textArea: false,
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

        <div className={classes.inputBox} onClick={onClick}>
          <input
            data-testid={'base-date-input'}
            className={inputStyle}
            autoFocus={autoFocus}
            onFocus={onFocus}
            onBlur={onBlur}
            placeholder=" "
            value={value}
            name={name}
            type="text"
            id={name}
            readOnly
          />

          <div
            title="Abrir calendário"
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
