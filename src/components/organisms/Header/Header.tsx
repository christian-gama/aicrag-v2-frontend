import * as classes from './stylesheet'

type HeaderProps = {
  pageName: string
}

export const Header: React.FC<HeaderProps> = ({ pageName }) => {
  return (
    <div className={classes.header} data-testid="header">
      {pageName}
    </div>
  )
}
