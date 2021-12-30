import React from 'react'
import { pClasses, PRecipeVariants } from './P.css'

type PProps = {
  color?: PRecipeVariants['color']
}

const P: React.FC<PProps> = (props) => {
  const pStyle = pClasses.pRecipe({
    color: props.color
  })

  return <p className={pStyle}>{props.children}</p>
}

export default P
