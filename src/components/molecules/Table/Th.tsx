import * as classes from './stylesheet'

export const Th: React.FC = ({ children }) => {
  return (
    <th className={classes.tableCell} data-testid="table-th">
      {children}
    </th>
  )
}
