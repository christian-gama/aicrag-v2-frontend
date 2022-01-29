import * as classes from './stylesheet'
import { PRecipeVariants } from './stylesheet'

type PProps = {
  color?: PRecipeVariants['color']
}

export const P: React.FC<PProps> = ({ children, color }) => {
  const pStyle = classes.pRecipe({
    color
  })

  return (
    <p className={pStyle} data-testid="p">
      {children}
    </p>
  )
}

P.defaultProps = {
  color: 'text'
}
