import React from 'react'
import { showingUpStyle, tableStyle } from './stylesheet'
import TableProps from './Table.model'

const Table: React.FC<TableProps> = (props) => {
  return (
    <>
      {props.showingUp && (
        <span
          className={showingUpStyle}
          data-testid="table-showing-up"
        >{`Mostrando ${props.showingUp?.current} de ${props.showingUp.total}`}</span>
      )}
      <table className={tableStyle} data-testid="table">
        {props.children}
      </table>
    </>
  )
}

export default Table
