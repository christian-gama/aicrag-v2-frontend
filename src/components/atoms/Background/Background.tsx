import { assignInlineVars } from '@vanilla-extract/dynamic'
import React from 'react'
import useWindowDimensions from '@/components/_hooks/useWindowDimensions'
import BackgroundProps from './Background.model'
import { backgroundRecipe, dimensionVars } from './stylesheet/recipes'

const Background: React.FC<BackgroundProps> = (props) => {
  const { height } = useWindowDimensions()

  const backgroundStyle = backgroundRecipe({
    gradient: !!props.gradient
  })

  return (
    <div className={backgroundStyle} style={assignInlineVars(dimensionVars, { height: `${height}px` })}>
      {props.children}
    </div>
  )
}

export default Background
