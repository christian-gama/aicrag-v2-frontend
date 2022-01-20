import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { userEvent, fireEvent, screen } from '@storybook/testing-library'
import React from 'react'
import sleep from '@/tests/helpers/sleep'
import Card from '../Card'
import Backdrop from './Backdrop'

export default {
  title: 'atoms/Backdrop',
  component: Backdrop,
  args: {
    isOpen: true,
    children: <Card style={{ height: '240px', width: '240px' }} centered />
  }
} as ComponentMeta<typeof Backdrop>

export const Default: ComponentStoryObj<typeof Backdrop> = {}

export const ClickOnBackdrop: ComponentStoryObj<typeof Backdrop> = {
  play: async () => {
    await sleep()
    const backdrop = screen.queryByTestId('backdrop')

    if (backdrop) await userEvent.click(backdrop)
  }
}

export const ClickOnBackdropWithAction: ComponentStoryObj<typeof Backdrop> = {
  ...ClickOnBackdrop,
  args: {
    onDismiss: () => alert('This component was dismissed by clicking on the backdrop.')
  }
}

export const PressEscape: ComponentStoryObj<typeof Backdrop> = {
  play: async () => {
    await sleep()
    fireEvent.keyDown(document, { key: 'Escape' })
  }
}

export const PressEscapeWithAction: ComponentStoryObj<typeof Backdrop> = {
  ...PressEscape,
  args: {
    onDismiss: () => alert('This component was dismissed by pressing the escape key.')
  }
}
