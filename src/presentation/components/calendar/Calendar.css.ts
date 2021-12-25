import { style } from '@vanilla-extract/css'
import { vars } from '@/presentation/styles/vars.css'

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

export const calendarClasses = {
  calendarContainerStyle
}
