import { style } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

const calendarFooterStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1.8rem',
  width: '100%',
  borderRadius: '0 0 5px 5px',
  backgroundColor: vars.colors['gray-50']
})

export const calendarFooterClasses = {
  calendarFooterStyle
}
