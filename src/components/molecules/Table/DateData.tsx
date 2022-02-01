import * as classes from './stylesheet'

type DateDataProps = {
  primaryDate: string
  secondaryDate: string
}

export const DateData: React.FC<DateDataProps> = ({ primaryDate, secondaryDate }) => {
  return (
    <div className={classes.dateData} data-testid="table-date-data">
      <span className={classes.dateDataTextPrimary}>{primaryDate}</span>
      <span>{secondaryDate}</span>
    </div>
  )
}
