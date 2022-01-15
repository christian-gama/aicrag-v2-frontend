import React from 'react'
import * as style from './stylesheet'

type TdProps = {
  hasCalendar?: boolean
}

const Td: React.FC<TdProps> = (props) => {
  return (
    <td className={style.tableCell} data-testid="table-td">
      {props.children}
    </td>
  )
}

export default Td
