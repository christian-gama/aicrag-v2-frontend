import { style } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

// Container
const calendarContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '52rem',
  height: '100%',
  backgroundColor: vars.colors.white,
  borderRadius: '5px'
})

// Body
const calendarBodyStyle = style({
  display: 'grid',
  gridAutoRows: '50px',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridTemplateRows: '28px',
  height: '100%',
  width: '100%',
  padding: '1.2rem 3.2rem'
})

export const calendarClasses = {
  calendarContainerStyle,
  calendarBodyStyle
}
