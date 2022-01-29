import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Popover } from './Popover'

export default {
  title: 'molecules/Popover',
  component: Popover,
  args: {
    isOpen: true,
    message: 'This is a popover message'
  }
} as ComponentMeta<typeof Popover>

export const Playground: ComponentStoryObj<typeof Popover> = {
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['success', 'error', 'info']
      }
    }
  },
  args: {
    type: 'success',
    duration: 10,
    minDuration: 3,
    onClose: () => alert('Executed onClose function')
  }
}

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
