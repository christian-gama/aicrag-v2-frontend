import { assignInlineVars } from '@vanilla-extract/dynamic'
import { horizontalScrollBarVars } from './stylesheet'
import * as classes from './stylesheet'

type HorizontalScrollBarProps = {
  width?: string
}

export const HorizontalScrollBar: React.FC<HorizontalScrollBarProps> = ({
  children,
  width
}) => {
  return (
    <div
      className={classes.horizontalScrollBar}
      data-testid="horizontal-scroll-bar"
      style={assignInlineVars(horizontalScrollBarVars, {
        width: width!
      })}
    >
      {children}
    </div>
  )
}

HorizontalScrollBar.defaultProps = {
  width: '100%'
}
