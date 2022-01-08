import render from '@/../tests/config/renderWithProvider'
import calendarStoreMock from '@/../tests/mocks/calendarStore.mock'
import { cleanup, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import CalendarFooter from '..'
import onCancelHandler from '../methods/onCancelHandler'
import onConfirmHandler from '../methods/onConfirmHandler'

jest.mock('../methods/onConfirmHandler')
jest.mock('../methods/onCancelHandler')

const makeSut = (): void => {
  render(<CalendarFooter />, { ...calendarStoreMock })
}

describe('CalendarFooter', () => {
  afterEach(() => {
    cleanup()
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('should call onConfirmHandler when clicking on "Salvar"', () => {
    makeSut()

    const confirmButton = screen.getByTestId('confirm-button')
    fireEvent.click(confirmButton)

    expect(onConfirmHandler).toHaveBeenCalled()
  })

  it('should call onCancelHandler when clicking on "Cancelar"', () => {
    makeSut()

    const cancelButton = screen.getByTestId('cancel-button')
    fireEvent.click(cancelButton)

    expect(onCancelHandler).toHaveBeenCalled()
  })
})
