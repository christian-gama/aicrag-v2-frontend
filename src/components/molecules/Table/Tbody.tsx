import React from 'react'
import * as style from './stylesheet'

const Tbody: React.FC = ({ children }) => {
  return (
    <tbody className={style.tableBody} data-testid="table-tbody">
      {children}
    </tbody>
  )
}

export default Tbody
