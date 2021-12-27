import render from '@/../tests/config/renderWithProvider'
import calendarStoreMock from '@/../tests/mocks/calendarStore.mock'
import { cleanup, fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import makeTimerValidator from '@/main/factories/validation/makeTimerValidator'
import CalendarTimer from '../CalendarTimer'

const makeSut = (): void => {
  render(<CalendarTimer validation={makeTimerValidator()} />, { ...calendarStoreMock })
}

describe('CalendarTime', () => {
  afterAll(() => {
    cleanup()
  })

  it('should render correctly', () => {
    makeSut()

    expect(screen.getByTestId('calendar-timer')).toBeTruthy()
  })

  describe('onChange', () => {
    it('should update the hour input value if onChange value is valid', () => {
      makeSut()

      const hourInput = screen.getByTestId('calendar-hour')
      userEvent.type(hourInput, '{backspace}{backspace}a1')

      expect(hourInput).toHaveValue('01')
    })

    it('should update the minute input value if onChange value is valid', () => {
      makeSut()

      const minuteInput = screen.getByTestId('calendar-minute')
      userEvent.type(minuteInput, '{backspace}{backspace}a1')

      expect(minuteInput).toHaveValue('01')
    })
  })

  describe('onBlur', () => {
    it('should update the hour input value if onBlur value is valid', () => {
      makeSut()

      const hourInput = screen.getByTestId('calendar-hour')
      userEvent.type(hourInput, '{backspace}{backspace}a1')
      fireEvent.blur(hourInput)

      expect(hourInput).toHaveValue('01')
    })

    it('should update the minute input value if onBlur value is valid', () => {
      makeSut()

      const minuteInput = screen.getByTestId('calendar-minute')
      userEvent.type(minuteInput, '{backspace}{backspace}a1')
      fireEvent.blur(minuteInput)

      expect(minuteInput).toHaveValue('01')
    })
  })

  describe('arrowUp', () => {
    it('should incerase the value of hour whey keyDown is arrowUp', () => {
      makeSut()

      const hourInput = screen.getByTestId('calendar-hour')
      userEvent.type(hourInput, '{backspace}{backspace}a23')
      fireEvent.keyDown(hourInput, { key: 'ArrowUp' })

      expect(hourInput).toHaveValue('00')
    })

    it('should incerase the value of minute whey keyDown is arrowUp', () => {
      makeSut()

      const minuteInput = screen.getByTestId('calendar-minute')
      userEvent.type(minuteInput, '{backspace}{backspace}a59')
      fireEvent.keyDown(minuteInput, { key: 'ArrowUp' })

      expect(minuteInput).toHaveValue('00')
    })
  })

  describe('arrowDown', () => {
    it('should decrease the value of hour whey keyDown is arrowUp', () => {
      makeSut()

      const hourInput = screen.getByTestId('calendar-hour')
      userEvent.type(hourInput, '{backspace}{backspace}a0')
      fireEvent.keyDown(hourInput, { key: 'ArrowDown' })

      expect(hourInput).toHaveValue('23')
    })

    it('should decrease the value of hour whey keyDown is arrowUp', () => {
      makeSut()

      const minuteInput = screen.getByTestId('calendar-minute')
      userEvent.type(minuteInput, '{backspace}{backspace}a0')
      fireEvent.keyDown(minuteInput, { key: 'ArrowDown' })

      expect(minuteInput).toHaveValue('59')
    })
  })
})
