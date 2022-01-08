import React from 'react'
import BackgroundProps from './Background.model'
import { backgroundRecipe } from './stylesheet/recipes'

const Background: React.FC<BackgroundProps> = (props) => {
  const backgroundStyle = backgroundRecipe({
    gradient: !!props.gradient
  })

  return <div className={backgroundStyle}>{props.children}</div>
}

export default Background
