import * as classes from './stylesheet'

type ThProps = {
  onClick?: () => void
}

export const Th: React.FC<ThProps> = ({ children, onClick }) => {
  return (
    <th className={classes.tableCell} data-testid="table-th">
      <span className={classes.tableHeading} onClick={onClick}>
        {children}
      </span>
    </th>
  )
}
