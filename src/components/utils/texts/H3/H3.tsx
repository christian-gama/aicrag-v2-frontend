import * as classes from './stylesheet'
import { H3RecipeVariants } from './stylesheet'

type H3Props = {
  color?: H3RecipeVariants['color']
}

export const H3: React.FC<H3Props> = ({ children, color }) => {
  const h3Style = classes.h3Recipe({
    color
  })

  return (
    <h3 className={h3Style} data-testid="h3">
      {children}
    </h3>
  )
}

H3.defaultProps = {
  color: 'text'
}
