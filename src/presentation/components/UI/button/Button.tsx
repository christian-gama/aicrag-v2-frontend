import React from 'react'
import LoadingSpinner from '../loadingSpinner/LoadingSpinner'
import { buttonRecipe } from './Button.css'
import ButtonProps from './Button.model'

const Button: React.FC<ButtonProps> = ({ onClick, style, children, loading, disabled, testid, type }) => {
  const buttonStyle = buttonRecipe({
    ...style,
    disabled
  })

  const renderChildren = (): React.ReactNode => {
    if (loading) {
      return (
        <LoadingSpinner
          style={{
            color: getLoadingColor(style)
          }}
        />
      )
    }

    return children
  }

  return (
    <button
      className={buttonStyle}
      data-testid={testid}
      disabled={disabled ?? loading}
      onClick={onClick}
      type={type ?? 'button'}
    >
      {renderChildren()}
    </button>
  )
}

export default Button

const getLoadingColor = (style: ButtonProps['style']): 'white' | 'main' =>
  !style?.mode || style?.mode === 'contained' ? 'white' : 'main'
