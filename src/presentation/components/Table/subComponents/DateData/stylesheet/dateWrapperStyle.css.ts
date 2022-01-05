import { style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { vars } from '@/application/common/stylesheet/vars.css'
import { tableVars } from '../../Tr/stylesheet'

export const dateWrapperStyle = style({
  alignItems: 'center',
  backgroundColor: vars.colors['snow-600'],
  borderRadius: `${tableVars.roundness} 0 0 ${tableVars.roundness}`,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  marginLeft: calc.negate(tableVars.row.horizontalPadding),
  width: '75%'
})
