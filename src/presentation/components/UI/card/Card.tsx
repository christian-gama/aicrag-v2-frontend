import React from 'react'
import { cardRecipe } from './Card.css'
import CardProps from './Card.model'

const Card: React.FC<CardProps> = ({ children, centered, roundness, transparent }) => {
  const cardStyle = cardRecipe({
    centered,
    roundness,
    transparent
  })

  return (
    <div data-testid="card" className={cardStyle}>
      {children}
    </div>
  )
}

export default Card
