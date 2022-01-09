import React from 'react'
import { style } from './stylesheet'

const HorizontalScrollBar: React.FC = (props) => {
  return <div className={style.HorizontalScrollBar}>{props.children}</div>
}

export default HorizontalScrollBar
