import React from 'react'
import { tbodyStyle } from './stylesheet'

const Tbody: React.FC = (props) => {
  return (
    <tbody className={tbodyStyle} data-testid="table-tbody">
      {props.children}
    </tbody>
  )
}

export default Tbody
