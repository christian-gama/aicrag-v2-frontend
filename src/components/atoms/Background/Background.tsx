import { assignInlineVars } from '@vanilla-extract/dynamic'
import React from 'react'
import useWindowDimensions from '@/components/_hooks/useWindowDimensions'
import {
  backgroundRecipe,
  BackgroundVariants,
  backgroundVars
} from './stylesheet'

type BackgroundProps = {
  gradient?: BackgroundVariants['gradient']
}

const Background: React.FC<BackgroundProps> = ({ children, gradient }) => {
  const { height } = useWindowDimensions()

  const backgroundStyle = backgroundRecipe({
    gradient: !!gradient
  })

  return (
    <div
      className={backgroundStyle}
      data-testid="background"
      style={assignInlineVars(backgroundVars, { height: `${height}px` })}
    >
      {children}
    </div>
  )
}

export default Background
