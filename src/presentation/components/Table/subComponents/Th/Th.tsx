import React from 'react'
import { baseCellStyle } from '../../stylesheet'

const Th: React.FC = (props) => {
  return <th className={baseCellStyle}>{props.children}</th>
}

export default Th
