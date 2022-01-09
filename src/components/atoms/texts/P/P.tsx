import React from 'react'
import { style } from './stylesheet'

type PProps = {
  color?: style.PRecipeVariants['color']
}

const P: React.FC<PProps> = (props) => {
  const pStyle = style.pRecipe({
    color: props.color
  })

  return (
    <p className={pStyle} data-testid="p">
      {props.children}
    </p>
  )
}

export default P
