import React from 'react'
import LoadingSpinnerIcon from '../icons/LoadingSpinnerIcon'
import ButtonProps from './protocols/Button.model'
import * as style from './stylesheet'

const Button: React.FC<ButtonProps> = (props) => {
  const buttonStyle = style.buttonRecipe({
    ...props.style,
    disabled: !!props.disabled
  })

  const getLoadingColor = (): 'white' | 'main' => {
    const hasMode = !!props.style?.mode
    const isContained = props.style?.mode === 'contained'
    const isLight = props.style?.color === 'light'

    if ((!hasMode || isContained) && !isLight) {
      return 'white'
    }

    return 'main'
  }

  const renderChildren = (): React.ReactNode => {
    if (props.loading) {
      return (
        <LoadingSpinnerIcon
          style={{
            color: getLoadingColor()
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
