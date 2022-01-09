import React from 'react'
import LoadingSpinnerIcon from '../../../../components/atoms/icons/LoadingSpinnerIcon'
import ButtonProps from './Button.model'
import { getLoadingColor } from './methods/getLoadingColor'
import { buttonRecipe } from './stylesheet/recipes'

const Button: React.FC<ButtonProps> = (props) => {
  const buttonStyle = buttonRecipe({
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
