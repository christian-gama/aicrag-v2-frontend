import { calendarActions, CalendarStates } from '@/context/models/calendar'
import { useForm } from '@/context/models/form'
import { AppDispatch, RootState } from '@/context/store'
import { DateTime } from 'luxon'
import { ComponentPropsWithRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ControlDateInput } from '..'

type ControlDateInputProps = ComponentPropsWithRef<typeof ControlDateInput>

type UseControlDateInput = {
  defaultDate: ControlDateInputProps['defaultDate']
  autoFocus: ControlDateInputProps['autoFocus']
  name: ControlDateInputProps['name']
}

export const useControlDateInput = ({
  defaultDate,
  autoFocus,
  name
}: UseControlDateInput) => {
  const [currentDate, setCurrentDate] = useState(DateTime.now().toMillis())
  const reduxDispatch = useDispatch<AppDispatch>()
  const { selectedDate } = useSelector<RootState, CalendarStates>(
    (state) => state.calendar
  )
  const { openCalendar } = calendarActions

  const {
    formActions: {
      setInputCurrentType,
      setInputIsFocused,
      setInputIsTouched,
      setInputIsValid,
      setInputError,
      setInputValue,
      setFormData
    },
    state: {
      form: { isResetting },
      input: { isFocused, value }
    }
  } = useForm()

  useEffect(() => {
    if (defaultDate) setCurrentDate(defaultDate)
    else setCurrentDate(DateTime.now().toMillis())
  }, [defaultDate, isResetting])

  useEffect(() => {
    setInputIsFocused(name, !!autoFocus)
    setInputCurrentType(name, 'text')
    setInputError(name, undefined)
    setInputIsTouched(name, false)
    setInputIsValid(name, true)
    setInputValue(
      name,
      DateTime.fromMillis(currentDate).toFormat('dd/MM/yyyy HH:mm')
    )
  }, [isResetting])

  useEffect(() => {
    setFormData(name, DateTime.fromMillis(currentDate).toISO()!)
  }, [isResetting])

  useEffect(() => {
    const value = DateTime.fromMillis(selectedDate).toFormat('dd/MM/yyyy HH:mm')

    setFormData(name, DateTime.fromMillis(selectedDate).toISO()!)
    setInputValue(name, value)
  }, [selectedDate])

  const onBlurHandler = () => {
    setInputIsFocused(name, false)
    setInputIsTouched(name, true)
  }

  const onFocusHandler = () => {
    setInputIsFocused(name, true)

    reduxDispatch(openCalendar())
  }

  return {
    onFocusHandler,
    onBlurHandler,
    currentDate,
    isFocused,
    value
  }
}
