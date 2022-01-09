import { style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { vars } from '@/components/_settings/vars.css'
import { tableVars } from '../../Tr/stylesheet'

export const dateWrapper = style({
  alignItems: 'center',
  backgroundColor: vars.colors['snow-600'],
  borderRadius: `${tableVars.roundness} 0 0 ${tableVars.roundness}`,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  marginLeft: calc.negate(tableVars.row.horizontalPadding),
  width: '75%',

  '@media': {
    [vars.breakpoints.mobile]: {
      marginLeft: '-2.4rem',
      width: '70%'
    }
  }
})
