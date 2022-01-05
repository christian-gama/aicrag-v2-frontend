import React from 'react'
import { baseCellStyle } from '../../stylesheet'
import TdProps from './Td.model'

const Td: React.FC<TdProps> = (props) => {
  return (
    <td className={baseCellStyle} data-testid="table-td">
      {props.children}
    </td>
  )
}

export default Td
