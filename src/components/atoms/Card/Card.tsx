import { assignInlineVars } from '@vanilla-extract/dynamic'
import React from 'react'
import * as styles from './stylesheet'
import { CardVariants } from './stylesheet'

type CardProps = {
  centered?: CardVariants['centered']
  roundness?: CardVariants['roundness']
  transparent?: CardVariants['transparent']
  style?: {
    width?: string
    height?: string
    padding?: string
    margin?: string
  }
}

const Card: React.FC<CardProps> = ({
  centered,
  children,
  roundness,
  style,
  transparent
}) => {
  const cardStyle = styles.cardRecipe({
    centered: centered,
    roundness: roundness,
    transparent: transparent
  })

  return (
    <div
      data-testid="card"
      className={cardStyle}
      style={assignInlineVars(styles.cardVars, {
        height: style?.height ?? 'max-content',
        margin: style?.margin ?? '0',
        padding: style?.padding ?? '0',
        width: style?.width ?? 'max-content'
      })}
    >
      {children}
    </div>
  )
}

export default Card
