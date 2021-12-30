import IHandler from '@/domain/handler/handler.model'
import CalendarDayNumberProps from '../CalendarDayNumber.model'

type States = {
  dayNumber: number
}

const onClickHandler: IHandler<CalendarDayNumberProps, States> = (props, states): void => {
  if (props.onClick && !props.dimmed) {
    props.onClick(Number(states.dayNumber))
  }
}

export default onClickHandler
