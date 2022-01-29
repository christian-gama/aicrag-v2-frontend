import { HorizontalScrollBar } from '@/components/utils/HorizontalScrollBar'
import * as classes from './stylesheet'

type TableProps = {
  showingUp?: {
    current: number
    total: number
  }
}

export const Table: React.FC<TableProps> = ({ children, showingUp }) => {
  return (
    <>
      {showingUp && (
        <span
          className={classes.tableSpanShowingup}
          data-testid="table-showing-up"
        >{`Mostrando ${showingUp?.current} de ${showingUp.total}`}</span>
      )}

      <HorizontalScrollBar>
        <table className={classes.tableStyle} data-testid="table">
          {children}
        </table>
      </HorizontalScrollBar>
    </>
  )
}
