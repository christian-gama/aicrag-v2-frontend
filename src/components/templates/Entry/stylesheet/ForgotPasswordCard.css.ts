import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings'
import { windowDimensionVars } from './EntryCard.css'

export const forgotPasswordCard = style({
  height: '40rem',
  position: 'relative',
  width: '60rem',

  '@media': {
    [breakpoints.tablet]: {
      width: '50rem'
    },

    [breakpoints.mobile]: {
      height: '100%',
      margin: '0 auto',
      minHeight: windowDimensionVars.height,
      width: '100vw'
    }
  }
})

export const forgotPasswordCardHeader = style({
  alignItems: 'center',
  display: 'grid',
  gridTemplateColumns: 'max-content 1fr',
  height: '14rem',
  justifyItems: 'center',
  padding: '0 4rem',

  '@media': {
    [breakpoints.mobile]: {
      height: '12rem',
      padding: '0 0.8rem'
    }
  }
})
