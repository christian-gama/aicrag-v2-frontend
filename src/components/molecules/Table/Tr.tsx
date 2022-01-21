import React from 'react'
import * as style from './stylesheet'

const Tr: React.FC = ({ children }) => {
  return (
    <tr className={style.tableRow} data-testid="table-tr">
      {children}
    </tr>
  )
}

export default Tr
