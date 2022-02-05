import { HorizontalScrollBar } from '@/components/utils/HorizontalScrollBar'
import * as classes from './stylesheet'

export const Table: React.FC = ({ children }) => {
  return (
    <HorizontalScrollBar>
      <table className={classes.tableStyle} data-testid="table">
        {children}
      </table>
    </HorizontalScrollBar>
  )
}
