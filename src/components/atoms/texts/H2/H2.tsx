import React from 'react'
import * as style from './stylesheet'

type H2Props = {
  color?: style.H2RecipeVariants['color']
}

const H2: React.FC<H2Props> = (props) => {
  const h2Style = style.h2Recipe({
    color: props.color
  })

  return (
    <h2 className={h2Style} data-testid="h2">
      {props.children}
    </h2>
  )
}

export default H2
