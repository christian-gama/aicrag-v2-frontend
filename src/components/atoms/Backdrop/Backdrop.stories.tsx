import { ComponentStory, ComponentMeta } from '@storybook/react'
import { userEvent, screen, fireEvent } from '@storybook/testing-library'
import React from 'react'
import Backdrop from './Backdrop'

export default {
  title: 'atoms/Backdrop',
  component: Backdrop
} as ComponentMeta<typeof Backdrop>

const Template: ComponentStory<typeof Backdrop> = (args) => {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundImage: "url('https://source.unsplash.com/random/1920x1080')",
          backgroundSize: 'cover',
          width: '100%',
          height: '100%'
        }}
      ></div>

      <Backdrop {...args} />
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  isOpen: true
}

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
