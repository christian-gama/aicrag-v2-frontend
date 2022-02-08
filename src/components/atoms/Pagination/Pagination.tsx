import { ChevronIcon } from '@/components/utils/icons'
import * as classes from './stylesheet'

type PaginationProps = {
  totalPages: number
  currentPage: number
  previousPageHandler: () => void
  nextPageHandler: () => void
}

export const Pagination: React.FC<PaginationProps> = ({
  previousPageHandler,
  nextPageHandler,
  currentPage,
  totalPages
}) => {
  const isPreviousDisabled = currentPage <= 1
  const isNextDisabled = currentPage >= totalPages

  return (
    <div className={classes.pagination} data-testid="pagination">
      <div
        data-testid="pagination-action-previous"
        className={classes.paginationAction({ disabled: currentPage <= 1 })}
        onClick={isPreviousDisabled ? undefined : previousPageHandler}
      >
        <ChevronIcon direction="left" size="xsm" color="white" />
      </div>

      <div className={classes.paginationPage}>{currentPage}</div>

      <div
        data-testid="pagination-action-next"
        className={classes.paginationAction({
          disabled: currentPage >= totalPages
        })}
        onClick={isNextDisabled ? undefined : nextPageHandler}
      >
        <ChevronIcon direction="right" size="xsm" color="white" />
      </div>
    </div>
  )
}
