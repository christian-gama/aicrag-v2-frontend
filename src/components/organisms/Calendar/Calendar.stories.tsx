import { configureStore } from '@reduxjs/toolkit'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Provider } from 'react-redux'
import { calendarStoreMock } from '@/tests/mocks'
import { Calendar as CalendarComponent } from './Calendar'

export default {
  title: 'organisms/Calendar',
  component: CalendarComponent,
  decorators: [
    (story) => (
      <Provider store={configureStore(calendarStoreMock)}>{story()}</Provider>
    )
  ]
} as ComponentMeta<typeof CalendarComponent>

export const Calendar: ComponentStoryObj<typeof CalendarComponent> = {
  args: { previousDate: Date.now() }
}
