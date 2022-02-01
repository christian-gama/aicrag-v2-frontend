import { assignInlineVars } from '@vanilla-extract/dynamic'
import { useWindowDimensions } from '@/components/_hooks'
import * as classes from './stylesheet'
import { BackgroundVariants } from './stylesheet'

type BackgroundProps = {
  gradient?: BackgroundVariants['gradient']
}

export const Background: React.FC<BackgroundProps> = ({
  children,
  gradient
}) => {
  const { height } = useWindowDimensions()

  const backgroundStyle = classes.backgroundRecipe({
    gradient: !!gradient
  })

  return (
    <div
      style={assignInlineVars(classes.backgroundVars, {
        height: `${height}px`
      })}
      className={backgroundStyle}
      data-testid="background"
    >
      {children}
    </div>
  )
}
