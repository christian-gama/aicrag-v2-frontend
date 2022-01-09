import { style } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const tableStyle = style({
  fontFamily: vars.font.p.fontFamily,
  fontSize: vars.font.p.fontSize,
  margin: '0 auto'
})
