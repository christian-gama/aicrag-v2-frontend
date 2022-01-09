import React from 'react'
import { tableBody } from './stylesheet'

const Tbody: React.FC = (props) => {
  return (
    <tbody className={tableBody} data-testid="table-tbody">
      {props.children}
    </tbody>
  )
}

export default Tbody
