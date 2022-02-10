import { globalStyle, style } from '@vanilla-extract/css'
import { breakpoints, vars } from '@/components/_settings'

export const task = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  width: '100%'
})

export const taskFormWrapper = style({
  gridColumn: '2/3'
})

export const taskFormInputCounter = style({
  position: 'relative'
})

export const taskForm = style({
  gridColumn: 'taskForm',
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
      width: '61vw',
      gap: '4rem 0.8rem'
    },

    [breakpoints.desktop]: {
      width: '92vw',
      gap: '4rem 1.2rem'
    },

    [breakpoints.tablet]: {
      width: '90vw',
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
  gridColumn: '2/3',
  justifySelf: 'end',
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

globalStyle(`${taskForm} > div`, {
  position: 'relative'
})

globalStyle(`${taskForm} div output`, {
  position: 'absolute',
  right: '0',
  top: '95%'
})
