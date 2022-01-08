import React from 'react'
import * as style from './stylesheet'

const HorizontalScrollBar: React.FC = (props) => {
  return <div className={style.scrollBar}>{props.children}</div>
}

export default HorizontalScrollBar
