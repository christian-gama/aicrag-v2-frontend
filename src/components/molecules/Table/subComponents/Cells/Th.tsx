import React from 'react'
import { tableCell } from '../../stylesheet'

const Th: React.FC = (props) => {
  return (
    <th className={tableCell} data-testid="table-th">
      {props.children}
    </th>
  )
}

export default Th
