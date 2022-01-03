import React from 'react'
import { h1Classes, H1RecipeVariants } from './stylesheet/H1.css'

type H1Props = {
  color?: H1RecipeVariants['color']
}

const H1: React.FC<H1Props> = (props) => {
  const h1Style = h1Classes.h1Recipe({
    color: props.color
  })

  return <h1 className={h1Style}>{props.children}</h1>
}

export default H1
