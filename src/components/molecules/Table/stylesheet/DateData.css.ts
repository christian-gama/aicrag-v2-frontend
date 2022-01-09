import { style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { breakpoints } from '@/components/_settings/breakpoints.css'
import { vars } from '@/components/_settings/vars.css'
import { tableRowVars } from './TableRow.css'

export const dateData = style({
  alignItems: 'center',
  backgroundColor: vars.colors['snow-600'],
  borderRadius: `${tableRowVars.roundness} 0 0 ${tableRowVars.roundness}`,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  marginLeft: calc.negate(tableRowVars.row.horizontalPadding),
  width: '75%',

  '@media': {
    [breakpoints.mobile]: {
      marginLeft: '-2.4rem',
      width: '70%'
    }
  }
})

export const dateDataTextPrimary = style({
  fontSize: '2.4rem',
  lineHeight: '1.2',

  '@media': {
    [breakpoints.mobile]: {
      fontSize: '2rem',
      lineHeight: '1.2'
    }
  }
})
