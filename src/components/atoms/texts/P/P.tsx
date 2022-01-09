import React from 'react'
import { pRecipe, PRecipeVariants } from './stylesheet/recipes/pRecipe.css'

type PProps = {
  color?: PRecipeVariants['color']
}

const P: React.FC<PProps> = (props) => {
  const pStyle = pRecipe({
    color: props.color
  })

  return (
    <p className={pStyle} data-testid="p">
      {props.children}
    </p>
  )
}

export default P
