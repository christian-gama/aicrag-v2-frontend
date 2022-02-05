import { style } from '@vanilla-extract/css'
import { breakpoints, vars } from '@/components/_settings'

export const task = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',

  '@media': {
    [breakpoints.mobile]: {
      marginTop: '3.2rem'
    }
  }
})

export const taskForm = style({
  display: 'grid',
  gridTemplateAreas: `
  "taskId      taskId     "
  "date        type       "
  "duration    status     "
  "commentary  commentary "
  "buttonGroup buttonGroup"
  `,
  gridTemplateColumns: '1fr 1fr',
  width: '68vw',
  maxWidth: '90rem',
  gap: '4rem 10rem',

  '@media': {
    [breakpoints.widescreen]: {
      gap: '4rem 0.8rem'
    },

    [breakpoints.desktop]: {
      width: '92vw',
      gap: '4rem 1.2rem'
    },

    [breakpoints.tablet]: {
      gridTemplateAreas: `
      "taskId      taskId     "
      "date        date       "
      "status      status     "
      "duration    duration   "
      "type        type       "
      "commentary  commentary "
      "buttonGroup buttonGroup"
      `
    },

    [breakpoints.smallMobile]: {
      width: '95vw',
      gap: '3.2rem 1.2rem'
    }
  }
})

export const taskButtonGroup = style({
  display: 'flex',
  gridArea: 'buttonGroup',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.2rem'
})

export const taskValue = style({
  alignSelf: 'flex-end',
  marginBottom: '1.2rem'
})

export const taskValueText = style({
  fontSize: vars.font.p.fontSize,
  fontFamily: vars.font.p.fontFamily,
  color: vars.colors['cyan-700']
})

export const taskValuePrice = style({
  fontSize: vars.font.p.fontSize,
  fontFamily: vars.font.p.fontFamily,
  color: vars.colors.text.default,
  marginLeft: '0.8rem'
})
