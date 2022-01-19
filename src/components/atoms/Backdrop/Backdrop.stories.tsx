import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { userEvent, fireEvent, screen } from '@storybook/testing-library'
import sleep from '@/tests/helpers/sleep'
import Backdrop from './Backdrop'

export default {
  title: 'atoms/Backdrop',
  component: Backdrop,
  args: {
    isOpen: true
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
    onDismiss: () => alert('Dismissed')
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
    onDismiss: () => alert('Dismissed')
  }
}
