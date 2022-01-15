import { ComponentStory, ComponentMeta } from '@storybook/react'
import { userEvent, screen, fireEvent } from '@storybook/testing-library'
import React, { useState } from 'react'
import Backdrop from './Backdrop'

export default {
  title: 'atoms/Backdrop',
  component: Backdrop
} as ComponentMeta<typeof Backdrop>

const Template: ComponentStory<typeof Backdrop> = (args) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen((prev) => !prev)}>Open Backdrop</button>
      <Backdrop isOpen={isOpen || args.isOpen} onDismiss={args.onDismiss} />
    </>
  )
}

export const Default = Template.bind({})

export const ClickOnBackdrop = Template.bind({})
ClickOnBackdrop.args = {
  isOpen: true,
  onDismiss: () => {
    alert('Dismissed by clicking on backdrop')
  }
}
ClickOnBackdrop.play = async () => {
  await new Promise((resolve) => setTimeout(resolve, 300))

  const backdrop = screen.getByTestId('backdrop')
  await userEvent.click(backdrop)
}

export const PressEscape = Template.bind({})
PressEscape.args = {
  isOpen: true,
  onDismiss: () => {
    alert('Dismissed using ESCAPE')
  }
}
PressEscape.play = async () => {
  await new Promise((resolve) => setTimeout(resolve, 300))

  fireEvent.keyDown(document, { key: 'Escape' })
}
