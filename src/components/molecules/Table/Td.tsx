import { assignInlineVars } from '@vanilla-extract/dynamic'
import * as classes from './stylesheet'
import { tableCellVar } from './stylesheet'

type TdProps = {
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between'
}

export const Td: React.FC<TdProps> = ({ children, justifyContent }) => {
  return (
    <td
      style={assignInlineVars(tableCellVar, {
        justifyContent: justifyContent!
      })}
      className={classes.tableCell}
      data-testid="table-td"
    >
      <span className={classes.tableCellSpan}>{children}</span>
    </td>
  )
}

Td.defaultProps = {
  justifyContent: 'flex-start'
}
