import React from 'react'
import { baseCellStyle } from '../../stylesheet'
import TdProps from './Td.model'

const Td: React.FC<TdProps> = (props) => {
  return <td className={baseCellStyle}>{props.children}</td>
}

export default Td
