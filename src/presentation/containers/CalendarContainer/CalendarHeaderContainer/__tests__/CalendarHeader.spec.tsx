import render from '@/../tests/config/renderWithProvider'
import calendarStoreMock from '@/../tests/mocks/calendarStore.mock'
import { cleanup, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import * as Redux from 'react-redux'
import CalendarHeader from '..'

const makeSut = (): void => {
  render(<CalendarHeader />, { ...calendarStoreMock })
}

describe('CalendarHeader', () => {
  afterEach(() => {
    cleanup()
  })

  it('should call handleNextMonth when clicking on ChevronIcon right', () => {
    const dispatchSpy = jest.spyOn(Redux, 'useDispatch')

    makeSut()

    const chevronRight = screen.getByTestId('chevron-right-icon')
    fireEvent.click(chevronRight)

    expect(dispatchSpy).toHaveBeenCalled()

    dispatchSpy.mockRestore()
  })

  it('should call handlePreviousMonth when clicking on ChevronIcon left', () => {
    const dispatchSpy = jest.spyOn(Redux, 'useDispatch')

    makeSut()

    const chevronRight = screen.getByTestId('chevron-left-icon')
    fireEvent.click(chevronRight)

    expect(dispatchSpy).toHaveBeenCalled()

    dispatchSpy.mockRestore()
  })
})
