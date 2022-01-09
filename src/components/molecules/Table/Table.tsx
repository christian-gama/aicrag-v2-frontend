import React from 'react'
import HorizontalScrollBar from '../../atoms/HorizontalScrollBar'
import TableProps from './protocols/Table.model'
import * as style from './stylesheet'

const Table: React.FC<TableProps> = (props) => {
  return (
    <>
      {props.showingUp && (
        <span
          className={style.tableSpanShowingup}
          data-testid="table-showing-up"
        >{`Mostrando ${props.showingUp?.current} de ${props.showingUp.total}`}</span>
      )}

      <HorizontalScrollBar>
        <table className={style.tableStyle} data-testid="table">
          {props.children}
        </table>
      </HorizontalScrollBar>
    </>
  )
}

export default Table
