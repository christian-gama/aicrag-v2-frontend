import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { screen, userEvent } from '@storybook/testing-library'
import sleep from '@/tests/helpers/sleep'
import Alert from './Alert'

export default {
  title: 'molecules/Alert',
  component: Alert,
  args: {
    isOpen: true,
    message: 'This is a message',
    title: 'This is a title'
  }
} as ComponentMeta<typeof Alert>

export const Default: ComponentStoryObj<typeof Alert> = {}

export const DefaultWithAction: ComponentStoryObj<typeof Alert> = {
  args: {
    actionName: 'Action',
    mode: 'actionAndCancel',
    onAction: () => alert('This component was dismissed by clicking on the action button.')
  }
}

export const ClickOnAction: ComponentStoryObj<typeof Alert> = {
  ...DefaultWithAction,
  play: async () => {
    await sleep()
    const button = screen.getByText(/action/i)

    await userEvent.click(button)
  }
}

export const DefaultWithCancelHandler: ComponentStoryObj<typeof Alert> = {
  args: {
    mode: 'cancelOnly',
    onCancel: () => alert('This component was dismissed by clicking on the cancel button.')
  }
}

export const ClickOnCancel: ComponentStoryObj<typeof Alert> = {
  ...DefaultWithCancelHandler,
  play: async () => {
    await sleep()
    const button = screen.getByText(/voltar/i)

    await userEvent.click(button)
  }
}

export const Info: ComponentStoryObj<typeof Alert> = {
  args: {
    type: 'info'
  }
}

export const InfoWithAction: ComponentStoryObj<typeof Alert> = {
  args: {
    actionName: 'Action',
    mode: 'actionAndCancel',
    type: 'info',
    onAction: () => alert('This component was dismissed by clicking on the action button.')
  }
}
export const Danger: ComponentStoryObj<typeof Alert> = {
  args: {
    type: 'danger'
  }
}

export const DangerWithAction: ComponentStoryObj<typeof Alert> = {
  args: {
    actionName: 'Action',
    mode: 'actionAndCancel',
    type: 'danger',
    onAction: () => alert('This component was dismissed by clicking on the action button.')
  }
}
