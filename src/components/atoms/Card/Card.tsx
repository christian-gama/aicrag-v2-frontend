import { assignInlineVars } from '@vanilla-extract/dynamic'
import React from 'react'
import * as styles from './stylesheet'
import { CardVariants } from './stylesheet'

type CardProps = {
  centered?: CardVariants['centered']
  roundness?: CardVariants['roundness']
  transparent?: CardVariants['transparent']
  style?: {
    padding?: string
    height?: string
    margin?: string
    width?: string
  }
}

const Card: React.FC<CardProps> = ({
  transparent,
  roundness,
  centered,
  children,
  style
}) => {
  const cardStyle = styles.cardRecipe({
    transparent,
    roundness,
    centered
  })

  return (
    <div
      data-testid="card"
      className={cardStyle}
      style={assignInlineVars(styles.cardVars, {
        height: style?.height ?? 'max-content',
        width: style?.width ?? 'max-content',
        padding: style?.padding ?? '0',
        margin: style?.margin ?? '0'
      })}
    >
      {children}
    </div>
  )
}

Card.defaultProps = {
  transparent: false,
  centered: false,
  roundness: 'sm'
}

export default Card
