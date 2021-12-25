import { style } from '@vanilla-extract/css'
import { vars } from '@/presentation/styles/vars.css'

const calendarFooterStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1.8rem',
  width: '100%',
  borderRadius: '0 0 5px 5px',
  backgroundColor: vars.colors['gray-50']
})

const calendarButtonContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%'
})

export const calendarFooterClasses = {
  calendarFooterStyle,
  calendarButtonContainer
}