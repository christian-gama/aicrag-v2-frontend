import React from 'react'
import DateDataProps from './DateData.model.css'
import * as style from './stylesheet'

const DateData: React.FC<DateDataProps> = (props) => {
  return (
    <div className={style.dateWrapper} data-testid="table-date-data">
      <span className={style.dateTextPrimary}>{props.primaryDate}</span>
      <span>{props.secondaryDate}</span>
    </div>
  )
}

export default DateData
