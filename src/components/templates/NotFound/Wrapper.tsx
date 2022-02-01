import * as classes from './stylesheet'

export const Wrapper: React.FC = ({ children }) => {
  return (
    <div data-testid="wrapper" className={classes.wrapper}>
      {children}
    </div>
  )
}
