import React from 'react'
import { trStyle } from './stylesheet'

const Tr: React.FC = (props) => {
  return <tr className={trStyle}>{props.children}</tr>
}

export default Tr
