import { assignInlineVars } from '@vanilla-extract/dynamic'
import React from 'react'
import * as style from './stylesheet'
import { horizontalScrollBarVars } from './stylesheet'

type HorizontalScrollBarProps = {
  width?: string
}

const HorizontalScrollBar: React.FC<HorizontalScrollBarProps> = (props) => {
  return (
    <div
      className={style.horizontalScrollBar}
      data-testid="horizontal-scroll-bar"
      style={assignInlineVars(horizontalScrollBarVars, {
        width: props.width ?? '100%'
      })}
    >
      {props.children}
    </div>
  )
}

export default HorizontalScrollBar
