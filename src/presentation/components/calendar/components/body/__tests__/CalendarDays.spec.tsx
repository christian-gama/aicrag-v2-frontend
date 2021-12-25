import render from '@/../tests/config/renderWithProvider'
import { screen, cleanup, fireEvent } from '@testing-library/react'
import { DateTime } from 'luxon'
import React from 'react'
import { RootState } from '@/infra/store'
import calendarReducer from '@/infra/store/calendarReducer'
import CalendarDays from '../CalendarDays'

const makeSut = (): void => {
  const reducer = calendarReducer
  const preloadedState: RootState = {
    calendar: {
      calendarDate: DateTime.local(2022, 1, 1, 0, 0).toMillis(),
      selectedDate: DateTime.local(2022, 1, 1, 0, 0).toMillis()
    }
  }

  render(<CalendarDays />, { preloadedState, reducer })
}

describe('CalendarDays', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render the calendar from 2022-01-01T00:00:00.000Z', () => {
    makeSut()

    const allDays = [
      'day-2021-12-28',
      'day-2021-12-29',
      'day-2021-12-30',
      'day-2022-01-01',
      'day-2022-01-02',
      'day-2022-01-03',
      'day-2022-01-04',
      'day-2022-01-05',
      'day-2022-01-06',
      'day-2022-01-07',
      'day-2022-01-08',
      'day-2022-01-09',
      'day-2022-01-10',
      'day-2022-01-11',
      'day-2022-01-12',
      'day-2022-01-13',
      'day-2022-01-14',
      'day-2022-01-15',
      'day-2022-01-16',
      'day-2022-01-17',
      'day-2022-01-18',
      'day-2022-01-19',
      'day-2022-01-20',
      'day-2022-01-21',
      'day-2022-01-22',
      'day-2022-01-23',
      'day-2022-01-24',
      'day-2022-01-25',
      'day-2022-01-26',
      'day-2022-01-27',
      'day-2022-01-28',
      'day-2022-01-29',
      'day-2022-01-30',
      'day-2022-01-31',
      'day-2022-02-01',
      'day-2022-02-02',
      'day-2022-02-03',
      'day-2022-02-04',
      'day-2022-02-05'
    ]

    allDays.forEach((day) => {
      expect(screen.getByTestId(day)).toBeInTheDocument()
    })
  })

  it('should select a date when clicking on a day', () => {
    makeSut()

    fireEvent.click(screen.getByTestId('day-2022-01-01'))
    const day = screen.getByTestId('day-2022-01-01')

    expect(day).toHaveAttribute('data-selected', 'true')
  })

  it('should happen nothing when clicking on a dimmed day', () => {
    makeSut()

    fireEvent.click(screen.getByTestId('day-2021-12-28'))
    const day = screen.getByTestId('day-2021-12-28')

    expect(day).not.toHaveAttribute('data-selected', 'false')
  })
})
