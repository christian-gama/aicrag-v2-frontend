import React from 'react'
import * as style from './stylesheet'

type H2Props = {
  color?: style.H2RecipeVariants['color']
}

const H2: React.FC<H2Props> = ({ children, color }) => {
  const h2Style = style.h2Recipe({
    color: color
  })

  return (
    <h2 className={h2Style} data-testid="h2">
      {children}
    </h2>
  )
}

export default H2
