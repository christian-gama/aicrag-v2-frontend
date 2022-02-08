import * as classes from './stylesheet'

export const TPagination: React.FC = ({ children }) => {
  return (
    <div className={classes.tablePagination} data-testid="table-footer">
      {children}
    </div>
  )
}
