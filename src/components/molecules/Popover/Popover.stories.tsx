import { ComponentStory, ComponentMeta } from '@storybook/react'
import React, { useState } from 'react'
import Popover from './Popover'

export default {
  title: 'molecules/Popover',
  component: Popover
} as ComponentMeta<typeof Popover>

const Template: ComponentStory<typeof Popover> = (args) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen((prev) => !prev)}>Toggle Popover</button>
      <Popover {...args} isOpen={isOpen} />
    </>
  )
}

export const SuccessType = Template.bind({})
SuccessType.args = {
  isOpen: true,
  message: 'This is a popover message',
  type: 'success'
}

export const ErrorType = Template.bind({})
ErrorType.args = {
  isOpen: true,
  message: 'This is a popover message',
  type: 'error'
}

export const InfoType = Template.bind({})
InfoType.args = {
  isOpen: true,
  message: 'This is a popover message',
  type: 'info'
}

export const CustomDuration = Template.bind({})
CustomDuration.args = {
  isOpen: true,
  message: 'This is a popover message with custom duration of 10s',
  type: 'success',
  duration: 10
}

export const WithCloseHandler = Template.bind({})
WithCloseHandler.args = {
  isOpen: true,
  message: 'This is a popover message',
  type: 'success',
  onClose: () => alert('close')
}
