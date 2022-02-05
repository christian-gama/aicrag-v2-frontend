import { style } from '@vanilla-extract/css'

export const newTask = style({
  marginTop: '5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%'
})

export const newTaskForm = style({
  display: 'grid',
  width: '90rem',
  gridTemplateAreas: `
  "taskId      taskId     "
  "date        type       "
  "duration    status     "
  "commentary  commentary "
  "buttonGroup buttonGroup"
  `,
  gap: '4rem 10rem'
})

export const newTaskButtonGroup = style({
  gridArea: 'buttonGroup',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1.2rem'
})
