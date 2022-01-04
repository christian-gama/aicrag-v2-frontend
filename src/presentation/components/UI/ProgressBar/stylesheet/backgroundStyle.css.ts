import { style } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const backgroundStyle = style({
  width: '100%',
  height: '100%',
  backgroundColor: vars.colors['gray-100']
})
