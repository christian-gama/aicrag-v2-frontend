import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import Alert from './Alert'

export default {
  title: 'molecules/Alert',
  component: Alert,
  args: {
    actionName: 'Action',
    isOpen: true,
    message: 'This is a message',
    title: 'This is a title',
    onAction: () =>
      alert('This component was dismissed by clicking on the action button.'),
    onCancel: () =>
      alert('This component was dismissed by clicking on the cancel button.')
  }
} as ComponentMeta<typeof Alert>

export const Default: ComponentStoryObj<typeof Alert> = {}

export const Playground: ComponentStoryObj<typeof Alert> = {
  args: {
    actionName: 'Action',
    isOpen: true,
    mode: 'actionAndCancel',
    type: 'danger',
    message: 'This is a message',
    title: 'This is a title',
    onAction: () =>
      alert('This component was dismissed by clicking on the action button.'),
    onCancel: () =>
      alert('This component was dismissed by clicking on the cancel button.')
  },
  argTypes: {
    mode: {
      control: {
        type: 'select',
        options: ['cancelOnly', 'actionAndCancel']
      }
    },
    actionName: {
      control: {
        type: 'text'
      }
    },
    type: {
      control: {
        type: 'select',
        options: ['info', 'warning', 'danger']
      }
    }
  }
}

export const Warning: ComponentStoryObj<typeof Alert> = {
  args: {
    type: 'warning'
  }
}

export const WarningWithAction: ComponentStoryObj<typeof Alert> = {
  args: {
    mode: 'actionAndCancel',
    type: 'warning'
  }
}

export const Info: ComponentStoryObj<typeof Alert> = {
  args: {
    type: 'info'
  }
}

export const InfoWithAction: ComponentStoryObj<typeof Alert> = {
  args: {
    mode: 'actionAndCancel',
    type: 'info'
  }
}

export const Danger: ComponentStoryObj<typeof Alert> = {
  args: {
    type: 'danger'
  }
}

export const DangerWithAction: ComponentStoryObj<typeof Alert> = {
  args: {
    mode: 'actionAndCancel',
    type: 'danger'
  }
}
