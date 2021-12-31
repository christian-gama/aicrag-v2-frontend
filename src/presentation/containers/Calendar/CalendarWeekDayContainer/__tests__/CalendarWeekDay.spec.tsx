import { render, screen } from '@testing-library/react'
import React from 'react'
import CalendarWeekDayContainer from '..'

const makeSut = (): void => {
  render(<CalendarWeekDayContainer />)
}

describe('CalendarWeekDay', () => {
  it('should render all the week days (short)', () => {
    makeSut()

    const sunday = screen.getByText('Dom')
    const monday = screen.getByText('Seg')
    const tuesday = screen.getByText('Ter')
    const wednesday = screen.getByText('Qua')
    const thursday = screen.getByText('Qui')
    const friday = screen.getByText('Sex')
    const saturday = screen.getByText('Sab')

    expect(sunday).toBeInTheDocument()
    expect(monday).toBeInTheDocument()
    expect(tuesday).toBeInTheDocument()
    expect(wednesday).toBeInTheDocument()
    expect(thursday).toBeInTheDocument()
    expect(friday).toBeInTheDocument()
    expect(saturday).toBeInTheDocument()
  })
})
