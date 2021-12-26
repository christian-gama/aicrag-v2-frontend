import React from 'react'
import Button from '../../../UI/button/Button'
import { calendarFooterClasses } from './CalendarFooter.css'
import CalendarTimer from './CalendarTimer'

export const CalendarFooter: React.FC = () => {
  return (
    <div className={calendarFooterClasses.calendarFooterStyle} data-testid="calendar-footer">
      <CalendarTimer />

      <div className={calendarFooterClasses.calendarButtonContainer}>
        <Button
          style={{
            mode: 'text',
            size: 'sm'
          }}
        >
          Cancelar
        </Button>

        <span style={{ marginLeft: '1.2rem' }} />

        <Button
          style={{
            mode: 'contained',
            size: 'sm'
          }}
        >
          Salvar
        </Button>
      </div>
    </div>
  )
}
