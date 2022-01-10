import React from 'react'
import * as style from './stylesheet'

type H4Props = {
  color?: style.H4RecipeVariants['color']
}

const H4: React.FC<H4Props> = (props) => {
  const h4Style = style.h4Recipe({
    color: props.color
  })

  return (
    <h4 className={h4Style} data-testid="h4">
      {props.children}
    </h4>
  )
}

export default H4
