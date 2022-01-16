import { configureStore } from '@reduxjs/toolkit'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { Provider } from 'react-redux'
import calendarStoreMock from '../../../../tests/mocks/calendarStore.mock'
import Calendar from './Calendar'

export default {
  title: 'organisms/Calendar',
  component: Calendar,
  decorators: [(story: any) => <Provider store={configureStore(calendarStoreMock)}>{story()}</Provider>]
} as ComponentMeta<typeof Calendar>

const Template: ComponentStory<typeof Calendar> = (args) => <Calendar {...args} />

export const Default = Template.bind({})
Default.args = {
  previousDate: Date.now()
}
