import React from 'react'
import * as style from './stylesheet'

const Td: React.FC = ({ children }) => {
  return (
    <td className={style.tableCell} data-testid="table-td">
      {children}
    </td>
  )
}

export default Td
