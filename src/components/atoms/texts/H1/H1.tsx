import React from 'react'
import * as style from './stylesheet'

type H1Props = {
  color?: style.H1RecipeVariants['color']
}

const H1: React.FC<H1Props> = ({ children, color }) => {
  const h1Style = style.h1Recipe({
    color
  })

  return (
    <h1 className={h1Style} data-testid="h1">
      {children}
    </h1>
  )
}

export default H1
