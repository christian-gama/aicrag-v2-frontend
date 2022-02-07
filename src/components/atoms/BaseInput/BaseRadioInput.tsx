import * as classes from './stylesheet'

type BaseRadioInputProps = {
  onChange?: (event: any) => void
  checked?: boolean
  value: string
  label: string
  name: string
}

export const BaseRadioInput: React.FC<BaseRadioInputProps> = ({
  onChange,
  checked,
  label,
  value,
  name
}) => {
  const renderInput = () => {
    return (
      <>
        <input
          data-testid={'base-radio-input'}
          className={classes.radioInput}
          onChange={onChange}
          id={name + label}
          checked={checked}
          type={'radio'}
          value={value}
          name={name}
        />
      </>
    )
  }

  return (
    <div
      className={classes.radioInputWrapper}
      data-testid={'base-radio-input-wrapper'}
    >
      <div className={classes.radioInputContent}>
        {renderInput()}

        <label
          data-testid={'base-radio-input-label'}
          htmlFor={name + label}
          className={classes.radioLabel}
        >
          {label}
        </label>
      </div>
    </div>
  )
}
