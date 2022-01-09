import React from 'react'
import DateDataProps from './protocols/DateData.model'
import * as style from './stylesheet'

const DateData: React.FC<DateDataProps> = (props) => {
  return (
    <div className={style.dateData} data-testid="table-date-data">
      <span className={style.dateDataTextPrimary}>{props.primaryDate}</span>
      <span>{props.secondaryDate}</span>
    </div>
  )
}

export default DateData
