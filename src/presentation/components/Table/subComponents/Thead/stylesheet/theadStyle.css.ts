import { style } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'
import { baseWrapperStyle } from '../../../stylesheet'

export const theadStyle = style([
  baseWrapperStyle,
  {
    backgroundColor: vars.colors['navy-500'],
    color: vars.colors.white
  }
])
