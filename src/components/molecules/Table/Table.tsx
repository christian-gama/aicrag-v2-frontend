import React from 'react'
import HorizontalScrollBar from '../../utils/HorizontalScrollBar'
import * as style from './stylesheet'

type TableProps = {
  showingUp?: {
    current: number
    total: number
  }
}

const Table: React.FC<TableProps> = ({ children, showingUp }) => {
  return (
    <>
      {showingUp && (
        <span
          className={style.tableSpanShowingup}
          data-testid="table-showing-up"
        >{`Mostrando ${showingUp?.current} de ${showingUp.total}`}</span>
      )}

      <HorizontalScrollBar>
        <table className={style.tableStyle} data-testid="table">
          {children}
        </table>
      </HorizontalScrollBar>
    </>
  )
}

export default Table
