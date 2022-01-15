import translateError from '@/helpers/translateError'
import Maybe from '@/helpers/typescript/maybe.model'
import React, { useEffect, useState } from 'react'
import IValidation from '@/services/validators/protocols/validation.model'
import * as style from './stylesheet'

type BaseInputProps = {
  error?: Maybe<Error['message']>
  isFocused?: boolean
  isTouched?: boolean
  isValid?: boolean
  label: string
  name: string
  validator?: IValidation
  icon?: () => React.ReactNode
} & React.InputHTMLAttributes<HTMLInputElement>

const BaseInput: React.FC<BaseInputProps> = (props) => {
  const { error, icon, isFocused, isTouched, isValid, label, name, type, validator, value, ...rest } = props

  // Avoid the autofill of the input by the browser
  const [readonly, setReadonly] = useState(true)
  useEffect(() => {
    /* istanbul ignore next */
    const timer = setTimeout(() => {
      setReadonly(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const getState = (): style.LabelRecipeVariants['state'] => {
    if (validator) {
      if (!isValid && isTouched) {
        return 'error'
      }

      if (isValid) {
        return 'success'
      }
    }

    return 'default'
  }

  const labelStyle = style.labelRecipe({
    float: !!isFocused || value !== '',
    state: getState()
  })

  const inputStyle = style.inputRecipe({
    hasIcon: !!icon || type === 'password',
    state: getState()
  })

  return (
    <div className={style.input} data-testid={'base-input-wrapper'}>
      <div className={style.inputContent}>
        <label data-testid={'base-input-label'} htmlFor={name} className={labelStyle}>
          {label}
        </label>

        <div className={style.inputBox}>
          <input
            {...rest}
            className={inputStyle}
            data-testid={'base-input'}
            id={name}
            name={name}
            readOnly={readonly}
            type={type}
            value={value}
            placeholder=" "
          />

          {icon && (
            <div data-testid={'base-input-icon'} className={style.inputIcon}>
              {icon()}
            </div>
          )}
        </div>
      </div>

      {error && (
        <div data-testid={'base-input-error'} className={style.inputError}>
          {translateError(error)}
        </div>
      )}
    </div>
  )
}

export default BaseInput
