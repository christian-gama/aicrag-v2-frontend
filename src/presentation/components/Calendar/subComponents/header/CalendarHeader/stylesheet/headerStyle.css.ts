import { style } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const headerStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '6rem',
  padding: '1.8rem',
  backgroundColor: vars.colors['navy-600'],
  borderRadius: '5px 5px 0 0'
})
