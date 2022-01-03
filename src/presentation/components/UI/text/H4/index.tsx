import React from 'react'
import { h4Recipe, H4RecipeVariants } from './stylesheet/h4Recipe.css'

type H4Props = {
  color?: H4RecipeVariants['color']
}

const H4: React.FC<H4Props> = (props) => {
  const h4Style = h4Recipe({
    color: props.color
  })

  return <h4 className={h4Style}>{props.children}</h4>
}

export default H4
