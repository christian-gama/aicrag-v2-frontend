import React from 'react'
import { h3Classes, H3RecipeVariants } from './H3.css'

type H3Props = {
  color?: H3RecipeVariants['color']
}

const H3: React.FC<H3Props> = ({ children, color }) => {
  const h3Style = h3Classes.h3Recipe({
    color
  })

  return <h3 className={h3Style}>{children}</h3>
}

export default H3
