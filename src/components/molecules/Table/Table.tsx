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
    <div className={classes.tableWrapper}>
      <div className={classes.tableContentWrapper}>
        {showingUp && (
          <span
            className={classes.tableSpanShowingup}
            data-testid="table-showing-up"
          >{`Mostrando ${showingUp?.current} de ${showingUp.total}`}</span>
        )}

        <HorizontalScrollBar
          breakpoints={{ default: '100%', desktop: '92vw', widescreen: '67vw' }}
        >
          <table className={classes.tableContent} data-testid="table">
            {children}
          </table>
        </HorizontalScrollBar>
      </div>
    </div>
  )
}
