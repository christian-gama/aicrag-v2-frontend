import { assignInlineVars } from '@vanilla-extract/dynamic'
import React from 'react'
import * as style from './stylesheet'
import { horizontalScrollBarVars } from './stylesheet'

type HorizontalScrollBarProps = {
  width?: string
}

const HorizontalScrollBar: React.FC<HorizontalScrollBarProps> = ({
  children,
  width
}) => {
  return (
    <div
      className={style.horizontalScrollBar}
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

export default HorizontalScrollBar
