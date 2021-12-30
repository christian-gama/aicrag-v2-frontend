import render from '@/../tests/config/renderWithProvider'
import calendarStoreMock from '@/../tests/mocks/calendarStore.mock'
import { cleanup, fireEvent, screen } from '@testing-library/react'
import React from 'react'
import * as Redux from 'react-redux'
import makeTimerValidator from '@/main/factories/validation/makeTimerValidator'
import CalendarFooter from '../CalendarFooter'

const makeSut = (): void => {
  render(<CalendarFooter name="createTaskCalendar" validation={makeTimerValidator()} />, { ...calendarStoreMock })
}

describe('CalendarFooter', () => {
  afterEach(() => {
    cleanup()
  })

  describe('cancel button', () => {
    it('should call closeModal action when clicking on cancel button', () => {
      const dispatchSpy = jest.spyOn(Redux, 'useDispatch')

      makeSut()

      const cancelButton = screen.getByTestId('cancel-button')
      fireEvent.click(cancelButton)

      expect(dispatchSpy).toHaveBeenCalled()

      dispatchSpy.mockRestore()
    })

    it('should call closeModal action when clicking on confirm button', () => {
      const dispatchSpy = jest.spyOn(Redux, 'useDispatch')

      makeSut()

      const confirmButton = screen.getByTestId('confirm-button')
      fireEvent.click(confirmButton)

      expect(dispatchSpy).toHaveBeenCalled()

      dispatchSpy.mockRestore()
    })
  })
})
