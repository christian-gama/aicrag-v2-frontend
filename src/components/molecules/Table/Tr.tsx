import React from 'react'
import * as style from './stylesheet'

const Tr: React.FC = (props) => {
  return (
    <tr className={style.tableRow} data-testid="table-tr">
      {props.children}
    </tr>
  )
}

export default Tr
