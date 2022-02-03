import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings'

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: vars.colors['navy-500'],
  height: '12rem'
})

export const headerLeft = style({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '9rem'
})

export const headerBackIcon = style({
  ':hover': {
    cursor: 'pointer'
  }
})

export const headerPageName = style({
  marginLeft: '4.4rem'
})

export const headerRight = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginRight: '9rem'
})

export const headerUserName = style({
  marginRight: '4.4rem'
})

export const headerIconGroup = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '16rem'
})
