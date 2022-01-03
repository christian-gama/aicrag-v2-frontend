import React from 'react'
import { pRecipe, PRecipeVariants } from './stylesheet/pRecipe.css'

type PProps = {
  color?: PRecipeVariants['color']
}

const P: React.FC<PProps> = (props) => {
  const pStyle = pRecipe({
    color: props.color
  })

  return <p className={pStyle}>{props.children}</p>
}

export default P
