import * as classes from './stylesheet'

export const Tr: React.FC = ({ children }) => {
  return (
    <tr className={classes.tableRow} data-testid="table-tr">
      {children}
    </tr>
  )
}
