import React from 'react'
import LoadingSpinnerIcon from '../icons/LoadingSpinnerIcon'
import ButtonProps from './Button.model'
import { buttonRecipe } from './stylesheet/Button.css'

const Button: React.FC<ButtonProps> = (props) => {
  const buttonStyle = buttonRecipe({
    ...props.style,
    disabled: props.disabled
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

const getLoadingColor = (style: ButtonProps['style']): 'white' | 'main' =>
  !style?.mode || style?.mode === 'contained' ? 'white' : 'main'
