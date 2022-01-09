import React from 'react'
import { tableCell } from '../../stylesheet'
import TdProps from './Td.model'

const Td: React.FC<TdProps> = (props) => {
  return (
    <td className={tableCell} data-testid="table-td">
      {props.children}
    </td>
  )
}

export default Td
