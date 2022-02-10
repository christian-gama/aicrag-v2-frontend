import { HorizontalScrollBar } from '@/components/utils/HorizontalScrollBar'
import * as classes from './stylesheet'
import { TPagination } from './TablePagination'

type TableProps = {
  showingUp?: {
    current: number
    total: number
  }
  pagination?: JSX.Element
}

export const Table: React.FC<TableProps> = ({
  children,
  showingUp,
  pagination
}) => {
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
          breakpoints={{
            default: '100%',
            desktop: '79.8vw',
            widescreen: '59.6vw'
          }}
        >
          <table className={classes.tableContent} data-testid="table">
            {children}
          </table>
        </HorizontalScrollBar>
      </div>

      {pagination && <TPagination>{pagination}</TPagination>}
    </div>
  )
}
