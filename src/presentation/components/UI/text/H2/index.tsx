import React from 'react'
import { H2RecipeVariants, h2Recipe } from './stylesheet/h2Recipe.css'

type H2Props = {
  color?: H2RecipeVariants['color']
}

const H2: React.FC<H2Props> = (props) => {
  const h2Style = h2Recipe({
    color: props.color
  })

  return <h2 className={h2Style}>{props.children}</h2>
}

export default H2
