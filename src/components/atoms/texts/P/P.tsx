import React from 'react'
import * as style from './stylesheet'

type PProps = {
  color?: style.PRecipeVariants['color']
}

const P: React.FC<PProps> = ({ children, color }) => {
  const pStyle = style.pRecipe({
    color
  })

  return (
    <p className={pStyle} data-testid="p">
      {children}
    </p>
  )
}

P.defaultProps = {
  color: 'text'
}

export default P
