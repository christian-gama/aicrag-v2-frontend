import React from 'react'
import { cardRecipe } from './Card.css'
import CardProps from './Card.model'

const Card: React.FC<CardProps> = (props) => {
  const cardStyle = cardRecipe({
    centered: props.centered,
    roundness: props.roundness,
    transparent: props.transparent
  })

  return (
    <div data-testid="card" className={cardStyle}>
      {props.children}
    </div>
  )
}

export default Card
