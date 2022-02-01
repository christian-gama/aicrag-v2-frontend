import * as classes from './stylesheet'
import { H2RecipeVariants } from './stylesheet'

type H2Props = {
  color?: H2RecipeVariants['color']
}

/**
 * @fontSize 3.2rem
 * @fontFamily Lato
 */
export const H2: React.FC<H2Props> = ({ children, color }) => {
  const h2Style = classes.h2Recipe({
    color: color
  })

  return (
    <h2 className={h2Style} data-testid="h2">
      {children}
    </h2>
  )
}

H2.defaultProps = {
  color: 'text'
}
