import React from 'react'
import * as style from './stylesheet'

const Tbody: React.FC = (props) => {
  return (
    <tbody className={style.tableBody} data-testid="table-tbody">
      {props.children}
    </tbody>
  )
}

export default Tbody
