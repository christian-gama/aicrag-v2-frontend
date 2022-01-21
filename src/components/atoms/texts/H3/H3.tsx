import React from 'react'
import * as style from './stylesheet'

type H3Props = {
  color?: style.H3RecipeVariants['color']
}

const H3: React.FC<H3Props> = ({ children, color }) => {
  const h3Style = style.h3Recipe({
    color
  })

  return (
    <h3 className={h3Style} data-testid="h3">
      {children}
    </h3>
  )
}

export default H3
