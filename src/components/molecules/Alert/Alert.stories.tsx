import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import Alert from './Alert'

export default {
  title: 'molecules/Alert',
  component: Alert
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />

export const Default = Template.bind({})
Default.args = {
  isOpen: true,
  title: 'This is a title',
  message: 'This is a message'
}

export const DefaultWithAction = Template.bind({})
DefaultWithAction.args = {
  isOpen: true,
  title: 'This is a title',
  message: 'This is a message',
  actionName: 'Action',
  mode: 'actionAndCancel',
  onAction: () => alert('Executing action')
}

export const DefaultWithCancelHandler = Template.bind({})
DefaultWithCancelHandler.args = {
  isOpen: true,
  title: 'This is a title',
  message: 'This is a message',
  mode: 'cancelOnly',
  onCancel: () => alert('Executing onCancel')
}

export const Info = Template.bind({})
Info.args = {
  isOpen: true,
  title: 'This is a title',
  message: 'This is a message',
  type: 'info'
}

export const InfoWithAction = Template.bind({})
InfoWithAction.args = {
  isOpen: true,
  title: 'This is a title',
  message: 'This is a message',
  type: 'info',
  actionName: 'Action',
  mode: 'actionAndCancel',
  onAction: () => alert('Executing action')
}

export const Danger = Template.bind({})
Danger.args = {
  isOpen: true,
  title: 'This is a title',
  message: 'This is a message',
  type: 'danger'
}

export const DangerWithAction = Template.bind({})
DangerWithAction.args = {
  isOpen: true,
  title: 'This is a title',
  message: 'This is a message',
  type: 'danger',
  actionName: 'Action',
  mode: 'actionAndCancel',
  onAction: () => alert('Executing action')
}
