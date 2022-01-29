import { assignInlineVars } from '@vanilla-extract/dynamic'
import { CardVariants } from './stylesheet'
import * as classes from './stylesheet'

type CardProps = {
  centered?: CardVariants['centered']
  roundness?: CardVariants['roundness']
  transparent?: CardVariants['transparent']
  style?: {
    padding?: string
    height?: string
    margin?: string
    width?: string
  }
}

export const Card: React.FC<CardProps> = ({
  transparent,
  roundness,
  centered,
  children,
  style
}) => {
  const cardClasses = classes.cardRecipe({
    transparent,
    roundness,
    centered
  })

  return (
    <div
      data-testid="card"
      className={cardClasses}
      style={assignInlineVars(classes.cardVars, {
        height: style?.height ?? 'max-content',
        width: style?.width ?? 'max-content',
        padding: style?.padding ?? '0',
        margin: style?.margin ?? '0'
      })}
    >
      {children}
    </div>
  )
}

Card.defaultProps = {
  transparent: false,
  centered: false,
  roundness: 'md'
}
