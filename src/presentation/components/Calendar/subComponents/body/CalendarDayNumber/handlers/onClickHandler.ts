import IHandler from '@/domain/handler/handler.model'
import CalendarDayNumberProps from '../CalendarDayNumber.model'

type Params = {
  dayNumber: number
  onClick: CalendarDayNumberProps['onClick']
  dimmed: CalendarDayNumberProps['dimmed']
}

const onClickHandler: IHandler<Params> = ({ dayNumber, dimmed, onClick }): void => {
  if (onClick && !dimmed) {
    onClick(Number(dayNumber))
  }
}

export default onClickHandler
