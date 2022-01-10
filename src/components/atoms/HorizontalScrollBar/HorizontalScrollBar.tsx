import React from 'react'
import * as style from './stylesheet'

const HorizontalScrollBar: React.FC = (props) => {
  return (
    <div className={style.HorizontalScrollBar} data-testid="horizontal-scroll-bar">
      {props.children}
    </div>
  )
}

export default HorizontalScrollBar
