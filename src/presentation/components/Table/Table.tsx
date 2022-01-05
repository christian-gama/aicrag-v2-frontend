import React from 'react'
import * as style from './stylesheet'
import TableProps from './Table.model'

const Table: React.FC<TableProps> = (props) => {
  return (
    <>
      {props.showingUp && (
        <span
          className={style.tableSpanShowingup}
          data-testid="table-showing-up"
        >{`Mostrando ${props.showingUp?.current} de ${props.showingUp.total}`}</span>
      )}
      <table className={style.tableStyle} data-testid="table">
        {props.children}
      </table>
    </>
  )
}

export default Table
