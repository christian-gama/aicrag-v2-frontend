import render from '@/../tests/config/renderWithProvider'
import calendarStoreMock from '@/../tests/mocks/calendarStore.mock'
import { cleanup, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import * as Redux from 'react-redux'
import CalendarHeader from '../CalendarHeader'

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

    const chevronIcons = screen.getAllByTestId('chevron-icon')
    fireEvent.click(chevronIcons[0])

    expect(dispatchSpy).toHaveBeenCalled()

    dispatchSpy.mockRestore()
  })

  it('should call handlePreviousMonth when clicking on ChevronIcon left', () => {
    const dispatchSpy = jest.spyOn(Redux, 'useDispatch')

    makeSut()

    const chevronIcons = screen.getAllByTestId('chevron-icon')
    fireEvent.click(chevronIcons[1])

    expect(dispatchSpy).toHaveBeenCalled()

    dispatchSpy.mockRestore()
  })
})
