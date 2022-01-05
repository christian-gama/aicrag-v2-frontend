import React from 'react'
import { baseCellStyle } from '../../stylesheet'

const Th: React.FC = (props) => {
  return (
    <th className={baseCellStyle} data-testid="table-th">
      {props.children}
    </th>
  )
}

export default Th
