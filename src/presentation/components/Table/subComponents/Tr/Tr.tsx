import React from 'react'
import { tableRow } from './stylesheet'

const Tr: React.FC = (props) => {
  return (
    <tr className={tableRow} data-testid="table-tr">
      {props.children}
    </tr>
  )
}

export default Tr
