import { render, cleanup, screen } from '@testing-library/react'
import { CalendarIcon } from '..'

describe('CalendarIcon', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<CalendarIcon />)
    const calendarIcon = screen.getByTestId('calendar-icon')

    expect(calendarIcon).toBeInTheDocument()
  })
})
