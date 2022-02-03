import { assignInlineVars } from '@vanilla-extract/dynamic'
import * as classes from './stylesheet'
import { PRecipeVariants, pVars } from './stylesheet'

type PProps = {
  color?: PRecipeVariants['color']
  margin?: string
  bold?: boolean
}

/**
 * @fontSize 1.6rem
 * @fontFamily Open Sans
 */
export const P: React.FC<PProps> = ({ children, color, bold, margin }) => {
  const pStyle = classes.pRecipe({
    color
  })

  return (
    <p
      style={assignInlineVars(pVars, { margin: margin ?? '0' })}
      className={pStyle}
      data-testid="p"
    >
      {bold ? <strong data-testid="strong">{children}</strong> : children}
    </p>
  )
}

P.defaultProps = {
  color: 'text'
}
