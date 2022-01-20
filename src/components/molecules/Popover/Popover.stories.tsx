import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { screen, userEvent } from '@storybook/testing-library'
import Popover from './Popover'

export default {
  title: 'molecules/Popover',
  component: Popover,
  args: {
    isOpen: true,
    message: 'This is a popover message'
  }
} as ComponentMeta<typeof Popover>

export const Success: ComponentStoryObj<typeof Popover> = {
  args: {
    type: 'success'
  }
}

export const Error: ComponentStoryObj<typeof Popover> = {
  args: {
    type: 'error'
  }
}

export const Info: ComponentStoryObj<typeof Popover> = {
  args: {
    type: 'info'
  }
}

export const WithCustomDuration: ComponentStoryObj<typeof Popover> = {
  args: {
    type: 'success',
    duration: 10
  }
}

export const WithAction: ComponentStoryObj<typeof Popover> = {
  args: {
    type: 'info',
    minDuration: 0.01,
    duration: 0.01,
    onClose: () => alert('This component was dismissed by clicking on the cross icon.')
  }
}

export const ClickOnClose: ComponentStoryObj<typeof Popover> = {
  args: {
    type: 'info',
    onClose: () => alert('This component was dismissed by clicking on the cross icon.')
  },
  play: async () => {
    const close = screen.getByTestId('popover-close-wrapper')

    await userEvent.click(close)
  }
}
