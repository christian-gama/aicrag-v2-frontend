import { assignInlineVars } from '@vanilla-extract/dynamic'
import * as classes from './stylesheet'
import { widthBreakpoints } from './stylesheet'

type HorizontalScrollBarProps = {
  breakpoints: {
    widescreen: string
    default: string
    desktop: string
  }
}

export const HorizontalScrollBar: React.FC<HorizontalScrollBarProps> = ({
  breakpoints,
  children
}) => {
  return (
    <div
      className={classes.horizontalScrollBar}
      data-testid="horizontal-scroll-bar"
      style={assignInlineVars(widthBreakpoints, {
        widescreen: breakpoints.widescreen,
        default: breakpoints.default,
        desktop: breakpoints.desktop
      })}
    >
      {children}
    </div>
  )
}
