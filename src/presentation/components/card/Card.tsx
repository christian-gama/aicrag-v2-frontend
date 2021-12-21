import React from 'react'
import { cardRecipe, CardVariants } from './Card.css'

type Props = {
  centered?: CardVariants['centered']
  roundness?: CardVariants['roundness']
}

const Card: React.FC<Props> = ({ children, centered, roundness }) => {
  const cardStyle = cardRecipe({
    centered,
    roundness
  })

  return (
    <div data-testid="card" className={cardStyle}>
      {children}
    </div>
  )
}

export default Card
