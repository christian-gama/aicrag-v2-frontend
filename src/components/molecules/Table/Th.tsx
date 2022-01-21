import React from 'react'
import * as style from './stylesheet'

const Th: React.FC = ({ children }) => {
  return (
    <th className={style.tableCell} data-testid="table-th">
      {children}
    </th>
  )
}

export default Th
