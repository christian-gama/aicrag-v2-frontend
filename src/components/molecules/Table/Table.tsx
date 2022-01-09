import React from 'react'
import HorizontalScrollBar from '../../../presentation/components/UI/HorizontalScrollBar'
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

      <HorizontalScrollBar>
        <table className={style.tableStyle} data-testid="table">
          {props.children}
        </table>
      </HorizontalScrollBar>
    </>
  )
}

export default Table
