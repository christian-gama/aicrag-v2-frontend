import React from 'react'
import * as style from './stylesheet'

type DateDataProps = {
  primaryDate: string
  secondaryDate: string
}

const DateData: React.FC<DateDataProps> = (props) => {
  return (
    <div className={style.dateData} data-testid="table-date-data">
      <span className={style.dateDataTextPrimary}>{props.primaryDate}</span>
      <span>{props.secondaryDate}</span>
    </div>
  )
}

export default DateData
