import React from 'react'
import TdProps from './protocols/Td.model'
import * as style from './stylesheet'

const Td: React.FC<TdProps> = (props) => {
  return (
    <td className={style.tableCell} data-testid="table-td">
      {props.children}
    </td>
  )
}

export default Td
