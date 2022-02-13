import { HorizontalScrollBar } from '@/components/utils/HorizontalScrollBar'
import * as classes from './stylesheet'
import { TPagination } from './TPagination'

type TableProps = {
  showingUp?: {
    current: number
    total: number
  }
  pagination?: JSX.Element
}

export const Table: React.FC<TableProps> = ({
  pagination,
  showingUp,
  children
}) => {
  return (
    <div className={classes.tableWrapper}>
      <div className={classes.tableContentWrapper}>
        <HorizontalScrollBar
          breakpoints={{
            default: '100%',
            desktop: '92vw',
            widescreen: '59.6vw'
          }}
        >
          <table className={classes.tableContent} data-testid="table">
            {children}
          </table>
        </HorizontalScrollBar>
      </div>

      {
        <TPagination>
          {showingUp && (
            <span
              className={classes.tableSpanShowingup}
              data-testid="table-showing-up"
            >{`Mostrando ${showingUp?.current} de ${showingUp.total}`}</span>
          )}

          {pagination}
        </TPagination>
      }
    </div>
  )
}
