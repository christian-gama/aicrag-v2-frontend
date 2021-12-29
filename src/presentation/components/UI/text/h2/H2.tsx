import React from 'react'
import { h2Classes, H2RecipeVariants } from './H2.css'

type H2Props = {
  color?: H2RecipeVariants['color']
}

const H2: React.FC<H2Props> = ({ children, color }) => {
  const h2Style = h2Classes.h2Recipe({
    color
  })

  return <h2 className={h2Style}>{children}</h2>
}

export default H2
