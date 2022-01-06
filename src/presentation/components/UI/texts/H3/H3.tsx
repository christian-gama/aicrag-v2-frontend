import React from 'react'
import { h3Recipe, H3RecipeVariants } from './stylesheet/recipes'

type H3Props = {
  color?: H3RecipeVariants['color']
}

const H3: React.FC<H3Props> = (props) => {
  const h3Style = h3Recipe({
    color: props.color
  })

  return <h3 className={h3Style}>{props.children}</h3>
}

export default H3
