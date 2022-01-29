import * as classes from './stylesheet'

export const Td: React.FC = ({ children }) => {
  return (
    <td className={classes.tableCell} data-testid="table-td">
      {children}
    </td>
  )
}
