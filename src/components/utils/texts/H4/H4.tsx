import * as classes from './stylesheet'
import { H4RecipeVariants } from './stylesheet'

type H4Props = {
  color?: H4RecipeVariants['color']
}

export const H4: React.FC<H4Props> = ({ children, color }) => {
  const h4Style = classes.h4Recipe({
    color
  })

  return (
    <h4 className={h4Style} data-testid="h4">
      {children}
    </h4>
  )
}

H4.defaultProps = {
  color: 'text'
}
