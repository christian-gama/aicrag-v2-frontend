import { style } from '@vanilla-extract/css'
import { vars } from '@/presentation/styles/vars.css'

const headerDateStyle = style({
  fontSize: vars.font.p.fontSize,
  fontFamily: vars.font.p.fontFamily,
  color: vars.colors.white
})

export const calendarHeaderDateClasses = {
  headerDateStyle
}
