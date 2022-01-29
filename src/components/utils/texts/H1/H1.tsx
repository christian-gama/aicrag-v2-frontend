import { H1RecipeVariants } from './stylesheet'
import * as classes from './stylesheet'

type H1Props = {
  color?: H1RecipeVariants['color']
}

export const H1: React.FC<H1Props> = ({ children, color }) => {
  const h1Style = classes.h1Recipe({
    color
  })

  return (
    <h1 className={h1Style} data-testid="h1">
      {children}
    </h1>
  )
}

H1.defaultProps = {
  color: 'text'
}
