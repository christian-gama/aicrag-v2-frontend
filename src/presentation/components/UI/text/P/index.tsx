import React from 'react'
import { pClasses, PRecipeVariants } from './P.css'

type PProps = {
  color?: PRecipeVariants['color']
}

const P: React.FC<PProps> = ({ children, color }) => {
  const pStyle = pClasses.pRecipe({
    color
  })

  return <p className={pStyle}>{children}</p>
}

export default P
