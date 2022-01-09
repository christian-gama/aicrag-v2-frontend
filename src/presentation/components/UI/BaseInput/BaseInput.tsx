import React, { useEffect, useState } from 'react'
import BaseInputProps from './BaseInput.model'
import * as style from './stylesheet'
import { inputRecipe, labelRecipe, LabelRecipeVariants } from './stylesheet/recipes'

const BaseInput: React.FC<BaseInputProps> = (props) => {
  const { error, icon, isFocused, isTouched, isValid, label, name, type, validator, value, ...rest } = props

  // Avoid the autofill of the input by the browser
  const [readonly, setReadonly] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setReadonly(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const getState = (): LabelRecipeVariants['state'] => {
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

  const labelStyle = labelRecipe({
    float: !!isFocused || value !== '',
    state: getState()
  })

  const inputStyle = inputRecipe({
    hasIcon: !!icon || type === 'password',
    state: getState()
  })

  const uniqueId = `input-${name.toLowerCase()}-${Math.floor(Math.random() * 1000)}`

  return (
    <div className={style.input} data-testid={`${name}-container`}>
      <div className={style.inputContent}>
        <label data-testid={`${label}-label`} htmlFor={uniqueId} className={labelStyle}>
          {label}
        </label>

        <div className={style.inputBox}>
          <input
            {...rest}
            className={inputStyle}
            data-testid={`${name}-input`}
            id={uniqueId}
            name={name}
            readOnly={readonly}
            type={type}
            value={value}
            placeholder=" "
          />

          {icon && (
            <div data-testid={`${props.name}-icon`} className={style.inputIcon}>
              {icon()}
            </div>
          )}
        </div>
      </div>

      {error && (
        <div data-testid={`${name}-error`} className={style.inputError}>
          {error}
        </div>
      )}
    </div>
  )
}

export default BaseInput
