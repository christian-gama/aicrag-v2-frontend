import React from 'react'
import * as style from './stylesheet'

const Th: React.FC = (props) => {
  return (
    <th className={style.tableCell} data-testid="table-th">
      {props.children}
    </th>
  )
}

export default Th
