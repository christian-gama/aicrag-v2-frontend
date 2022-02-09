import { calendarActions } from '@/context/models/calendar'
import { AppDispatch } from '@/context/store'
import { renderWithProviders, setupTests } from '@/tests/helpers'
import { screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DateTime } from 'luxon'
import { useDispatch } from 'react-redux'
import { Calendar } from '..'

const DummyButton = () => {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div>
      <button
        onClick={() => dispatch(calendarActions.openCalendar())}
        data-testid="open-button"
      >
        Open Calendar
      </button>
      <button
        onClick={() => dispatch(calendarActions.closeCalendar())}
        data-testid="close-button"
      >
        Close Calendar
      </button>
    </div>
  )
}

const renderWithButton = async (): Promise<void> => {
  await renderWithProviders(
    <div>
      <DummyButton />
      <Calendar
        previousDate={DateTime.local(2022, 1, 1, 0, 0, 0, 0).toMillis()}
      />
    </div>
  )
}

describe('Calendar', () => {
  setupTests()

  const getDateByIndex = (index: number) =>
    screen.getByTestId('calendar-body').childNodes[index]

  it('renders correctly', async () => {
    await renderWithButton()
    const calendarContainer = screen.getByTestId('calendar-wrapper')

    expect(calendarContainer).toBeInTheDocument()
  })

  it('closes if click on backdrop', async () => {
    await renderWithButton()
    const backdrop = screen.getByTestId('backdrop')

    userEvent.click(backdrop)

    expect(backdrop).not.toBeInTheDocument()
  })

  it('opens when dispatching openCalendar action', async () => {
    await renderWithButton()
    const calendarContainer = () => screen.queryByTestId('calendar-wrapper')
    const calendarButton = (state: 'open' | 'close') =>
      screen.getByTestId(`${state}-button`)

    // Close assertions
    userEvent.click(calendarButton('close'))

    expect(calendarContainer()).not.toBeInTheDocument()

    // Open assertions
    userEvent.click(calendarButton('open'))

    expect(calendarContainer()).toBeInTheDocument()
  })

  it('renders the correct days based on 2022-01-01T00:00:00.000Z', async () => {
    await renderWithButton()

    expect(getDateByIndex(7)).toHaveTextContent('26')
    expect(getDateByIndex(20)).toHaveTextContent('8')
    expect(getDateByIndex(27)).toHaveTextContent('15')
    expect(getDateByIndex(48)).toHaveTextContent('5')
  })

  it('picks a date when clicking on a day', async () => {
    await renderWithButton()
    const day = screen.getByTestId('01/01/2022 00:00')

    userEvent.click(day)

    expect(day).toHaveAttribute('data-selected', 'true')
  })

  it('does not pick a dimmed day when clicking on it', async () => {
    await renderWithButton()
    const day = screen.getByTestId('26/12/2021 00:00')

    userEvent.click(day)

    expect(day.hasAttribute('data-selected')).toBeFalsy()
  })

  it('renders the correct date heading', async () => {
    await renderWithButton()
    const heading = screen.getByTestId('calendar-header-date')

    expect(heading).toHaveTextContent(/^jan.*, 2022/gi)
  })

  it('skips to previous month when clicking on ChevronIcon from the left', async () => {
    await renderWithButton()
    const chevronIcons = screen.getAllByTestId('chevron-icon')

    userEvent.click(chevronIcons[0])

    expect(getDateByIndex(7)).toHaveTextContent('28')
    expect(getDateByIndex(20)).toHaveTextContent('11')
    expect(getDateByIndex(27)).toHaveTextContent('18')
    expect(getDateByIndex(48)).toHaveTextContent('8')
  })

  it('skips to next month when clicking on ChevronIcon from the right', async () => {
    await renderWithButton()
    const chevronIcons = screen.getAllByTestId('chevron-icon')

    userEvent.click(chevronIcons[1])

    expect(getDateByIndex(7)).toHaveTextContent('30')
    expect(getDateByIndex(20)).toHaveTextContent('12')
    expect(getDateByIndex(27)).toHaveTextContent('19')
    expect(getDateByIndex(48)).toHaveTextContent('12')
  })

  it('closes the calendar when clicking on confirm button', async () => {
    await renderWithButton()
    const confirmButton = screen.getByTestId('calendar-confirm-button')

    userEvent.click(confirmButton)

    expect(confirmButton).not.toBeInTheDocument()
  })

  it('closes when clicking on cancel button', async () => {
    await renderWithButton()
    const cancelButton = screen.getByTestId('calendar-cancel-button')

    userEvent.click(cancelButton)

    expect(cancelButton).not.toBeInTheDocument()
  })

  it('renders all the week days (short)', async () => {
    await renderWithButton()

    expect(getDateByIndex(0)).toHaveTextContent('Dom')
    expect(getDateByIndex(3)).toHaveTextContent('Qua')
    expect(getDateByIndex(6)).toHaveTextContent('Sab')
  })

  describe('Timer', () => {
    describe('when triggers onChange', () => {
      it('updates the hour input value if value is valid', async () => {
        await renderWithButton()
        const hourInput = screen.getByTestId('calendar-hour')

        userEvent.type(hourInput, '{backspace}{backspace}a1')

        expect(hourInput).toHaveValue('01')
      })

      it('updates the minute input value if value is valid', async () => {
        await renderWithButton()
        const minuteInput = screen.getByTestId('calendar-minute')

        userEvent.type(minuteInput, '{backspace}{backspace}a1')

        expect(minuteInput).toHaveValue('01')
      })
    })

    describe('when triggers onBlur', () => {
      it('updates the hour input value if value is valid', async () => {
        await renderWithButton()
        const hourInput = screen.getByTestId('calendar-hour')

        userEvent.type(hourInput, '{backspace}{backspace}a1')
        fireEvent.blur(hourInput)

        expect(hourInput).toHaveValue('01')
      })

      it('updates the minute input value if value is valid', async () => {
        await renderWithButton()
        const minuteInput = screen.getByTestId('calendar-minute')

        userEvent.type(minuteInput, '{backspace}{backspace}a1')
        fireEvent.blur(minuteInput)

        expect(minuteInput).toHaveValue('01')
      })
    })

    describe('when triggers  arrowUp', () => {
      it('increases the value of hour', async () => {
        await renderWithButton()
        const hourInput = screen.getByTestId('calendar-hour')

        userEvent.type(hourInput, '{backspace}{backspace}a23')
        fireEvent.keyDown(hourInput, { key: 'ArrowUp' })

        expect(hourInput).toHaveValue('00')
      })

      it('increases the value of minute', async () => {
        await renderWithButton()
        const minuteInput = screen.getByTestId('calendar-minute')

        userEvent.type(minuteInput, '{backspace}{backspace}a59')
        fireEvent.keyDown(minuteInput, { key: 'ArrowUp' })

        expect(minuteInput).toHaveValue('00')
      })
    })

    describe('when triggers arrowDown', () => {
      it('decreases the value of hour', async () => {
        await renderWithButton()
        const hourInput = screen.getByTestId('calendar-hour')

        userEvent.type(hourInput, '{backspace}{backspace}a0')
        fireEvent.keyDown(hourInput, { key: 'ArrowDown' })

        expect(hourInput).toHaveValue('23')
      })

      it('decreases the value of hour', async () => {
        await renderWithButton()
        const minuteInput = screen.getByTestId('calendar-minute')

        userEvent.type(minuteInput, '{backspace}{backspace}a0')
        fireEvent.keyDown(minuteInput, { key: 'ArrowDown' })

        expect(minuteInput).toHaveValue('59')
      })
    })
  })
})
