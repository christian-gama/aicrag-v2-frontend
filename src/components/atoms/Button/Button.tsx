import React from 'react'
import LoadingSpinnerIcon from '../icons/LoadingSpinnerIcon'
import { getLoadingColor } from './methods/getLoadingColor'
import ButtonProps from './protocols/Button.model'
import * as style from './stylesheet'

const Button: React.FC<ButtonProps> = (props) => {
  const buttonStyle = style.buttonRecipe({
    ...props.style,
    disabled: !!props.disabled
  })

  const renderChildren = (): React.ReactNode => {
    if (props.loading) {
      return (
        <LoadingSpinnerIcon
          style={{
            color: getLoadingColor(props.style)
          }}
        />
      )
    }

    return props.children
  }

  return (
    <button
      className={buttonStyle}
      data-testid={props.testid}
      disabled={props.disabled ?? props.loading}
      onClick={props.onClick}
      type={props.type ?? 'button'}
    >
      {renderChildren()}
    </button>
  )
}

export default Button
