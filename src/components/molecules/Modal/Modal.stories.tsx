import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import Modal from './Modal'

export default {
  title: 'molecules/Modal',
  component: Modal
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <div style={{ width: '300px', height: '300px' }}>Any content</div>,
  isOpen: true
}

export const FromTop = Template.bind({})
FromTop.args = {
  children: <div style={{ width: '300px', height: '300px' }}>Any content</div>,
  isOpen: true,
  direction: 'top'
}

export const FromBottom = Template.bind({})
FromBottom.args = {
  children: <div style={{ width: '300px', height: '300px' }}>Any content</div>,
  isOpen: true,
  direction: 'bottom'
}

export const FromLeft = Template.bind({})
FromLeft.args = {
  children: <div style={{ width: '300px', height: '300px' }}>Any content</div>,
  isOpen: true,
  direction: 'left'
}

export const FromRight = Template.bind({})
FromRight.args = {
  children: <div style={{ width: '300px', height: '300px' }}>Any content</div>,
  isOpen: true,
  direction: 'right'
}

export const WithDismissHandler = Template.bind({})
WithDismissHandler.args = {
  children: <div style={{ width: '300px', height: '300px' }}>Any content</div>,
  isOpen: true,
  onDismiss: () => alert('Dismissing')
}
