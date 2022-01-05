import React from 'react'
import { showingUpStyle, tableStyle } from './stylesheet'
import TableProps from './Table.model'

const Table: React.FC<TableProps> = (props) => {
  return (
    <>
      {props.showingUp && (
        <span className={showingUpStyle}>{`Mostrando ${props.showingUp?.current} de ${props.showingUp.total}`}</span>
      )}
      <table className={tableStyle}>{props.children}</table>
    </>
  )
}

export default Table
