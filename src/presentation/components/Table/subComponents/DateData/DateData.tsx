import React from 'react'
import DateDataProps from './DateData.model'
import { dateWrapperStyle, primaryDateStyle } from './stylesheet'

const DateData: React.FC<DateDataProps> = (props) => {
  return (
    <div className={dateWrapperStyle}>
      <span className={primaryDateStyle}>{props.primaryDate}</span>
      <span>{props.secondaryDate}</span>
    </div>
  )
}

export default DateData
