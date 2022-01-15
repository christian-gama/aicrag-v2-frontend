import { assignInlineVars } from '@vanilla-extract/dynamic'
import React from 'react'
import * as style from './stylesheet'
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

const Card: React.FC<CardProps> = (props) => {
  const cardStyle = style.cardRecipe({
    centered: props.centered,
    roundness: props.roundness,
    transparent: props.transparent
  })

  return (
    <div
      data-testid="card"
      className={cardStyle}
      style={assignInlineVars(style.cardVars, {
        height: props.style?.height ?? 'max-content',
        margin: props.style?.margin ?? '0',
        padding: props.style?.padding ?? '0',
        width: props.style?.width ?? 'max-content'
      })}
    >
      {props.children}
    </div>
  )
}

export default Card
