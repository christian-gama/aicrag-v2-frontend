import React from 'react'
import { H1RecipeVariants, h1Recipe } from './stylesheet/recipes'

type H1Props = {
  color?: H1RecipeVariants['color']
}

const H1: React.FC<H1Props> = (props) => {
  const h1Style = h1Recipe({
    color: props.color
  })

  return (
    <h1 className={h1Style} data-testid="h1">
      {props.children}
    </h1>
  )
}

export default H1
