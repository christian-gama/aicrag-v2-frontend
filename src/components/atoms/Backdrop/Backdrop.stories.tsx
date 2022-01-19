import { ComponentStory, ComponentMeta } from '@storybook/react'
import { userEvent, fireEvent, within } from '@storybook/testing-library'
import React from 'react'
import Backdrop from './Backdrop'

export default {
  title: 'atoms/Backdrop',
  component: Backdrop
} as ComponentMeta<typeof Backdrop>

const Template: ComponentStory<typeof Backdrop> = (args) => <Backdrop {...args} />

export const Default = Template.bind({})
Default.args = {
  isOpen: true
}

export const ClickOnBackdrop = Template.bind({})
ClickOnBackdrop.args = {
  isOpen: true
}
ClickOnBackdrop.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  const backdrop = canvas.queryByTestId('backdrop')

  if (backdrop) await userEvent.click(backdrop)
}

export const PressEscape = Template.bind({})
PressEscape.args = {
  isOpen: true
}
PressEscape.play = async () => {
  fireEvent.keyDown(document, { key: 'Escape' })
}
