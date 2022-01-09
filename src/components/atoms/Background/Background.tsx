import { assignInlineVars } from '@vanilla-extract/dynamic'
import React from 'react'
import useWindowDimensions from '@/components/_hooks/useWindowDimensions'
import BackgroundProps from './protocols/Background.model'
import { backgroundRecipe, backgroundVars } from './stylesheet'

const Background: React.FC<BackgroundProps> = (props) => {
  const { height } = useWindowDimensions()

  const backgroundStyle = backgroundRecipe({
    gradient: !!props.gradient
  })

  return (
    <div
      className={backgroundStyle}
      data-testid="background"
      style={assignInlineVars(backgroundVars, { height: `${height}px` })}
    >
      {props.children}
    </div>
  )
}

export default Background
