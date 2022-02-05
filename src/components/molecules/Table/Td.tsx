import * as classes from './stylesheet'

export const Td: React.FC = ({ children }) => {
  return (
    <td className={classes.tableCell} data-testid="table-td">
      <span className={classes.tableCellSpan}>{children}</span>
    </td>
  )
}
