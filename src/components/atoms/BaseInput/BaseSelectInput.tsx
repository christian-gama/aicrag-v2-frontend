import * as classes from './stylesheet'

type BaseSelectInputProps = {
  options: Array<{ value: string, label: string }>
  value?: string | number | string[] | undefined
  onChange?: (event: any) => void
  defaultValue?: string
  label: string
  name: string
}

export const BaseSelectInput: React.FC<BaseSelectInputProps> = ({
  defaultValue,
  onChange,
  options,
  label,
  value,
  name
}) => {
  const labelStyle = classes.labelRecipe({
    state: 'default',
    float: true
  })

  const inputStyle = classes.inputRecipe({
    state: 'default',
    textArea: false,
    hasIcon: false
  })

  return (
    <div className={classes.input} data-testid={'base-select-input-wrapper'}>
      <div className={classes.inputContent}>
        <label
          data-testid={'base-select-input-label'}
          htmlFor={name}
          className={labelStyle}
        >
          {label}
        </label>

        <div className={classes.inputBox}>
          <select
            data-testid={'base-select-input'}
            defaultValue={defaultValue}
            className={inputStyle}
            onChange={onChange}
            value={value}
            name={name}
            id={name}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
