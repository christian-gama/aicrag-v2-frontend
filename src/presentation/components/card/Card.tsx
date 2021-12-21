import React from 'react'
import { cardRecipe, CardVariants } from './Card.css'

type Props = {
  centered?: CardVariants['centered']
}

const Card: React.FC<Props> = ({ children, centered }) => {
  const cardStyle = cardRecipe({
    centered
  })

  return (
    <div data-testid="card" className={cardStyle}>
      {children}
    </div>
  )
}

export default Card
