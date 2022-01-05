import React from 'react'
import { theadStyle } from './stylesheet'

const Thead: React.FC = (props) => {
  return (
    <thead>
      <tr className={theadStyle}>{props.children}</tr>
    </thead>
  )
}

export default Thead
