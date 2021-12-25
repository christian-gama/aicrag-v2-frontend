import React from 'react'
import { cardRecipe, CardVariants } from './Card.css'

type Props = {
  centered?: CardVariants['centered']
  roundness?: CardVariants['roundness']
  transparent?: CardVariants['transparent']
}

const Card: React.FC<Props> = ({ children, centered, roundness, transparent }) => {
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
