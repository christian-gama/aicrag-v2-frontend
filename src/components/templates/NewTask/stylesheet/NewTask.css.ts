import { style } from '@vanilla-extract/css'

export const newTask = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '5rem',
  width: '100%'
})

export const newTaskForm = style({
  display: 'grid',
  gridTemplateAreas: `
  "taskId      taskId     "
  "date        type       "
  "duration    status     "
  "commentary  commentary "
  "buttonGroup buttonGroup"
  `,
  gridTemplateColumns: '1fr 1fr',
  width: '90rem',
  gap: '4rem 10rem'
})

export const newTaskButtonGroup = style({
  display: 'flex',
  gridArea: 'buttonGroup',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.2rem'
})
