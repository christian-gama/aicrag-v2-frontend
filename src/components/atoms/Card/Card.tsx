import { assignInlineVars } from '@vanilla-extract/dynamic'
import React from 'react'
import CardProps from './Card.model'
import { cardRecipe, cardVars } from './stylesheet/recipes'

const Card: React.FC<CardProps> = (props) => {
  const cardStyle = cardRecipe({
    centered: props.centered,
    roundness: props.roundness,
    transparent: props.transparent
  })

  return (
    <div
      data-testid="card"
      className={cardStyle}
      style={assignInlineVars(cardVars, {
        height: props.style?.height ?? 'max-content',
        margin: props.style?.height ?? '0',
        padding: props.style?.padding ?? '0',
        width: props.style?.width ?? 'max-content'
      })}
    >
      {props.children}
    </div>
  )
}

export default Card
