import * as classes from './stylesheet'

export const Tbody: React.FC = ({ children }) => {
  return (
    <tbody className={classes.tableBody} data-testid="table-tbody">
      {children}
    </tbody>
  )
}
