import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { Modal } from './Modal'

export default {
  title: 'molecules/Modal',
  component: Modal,
  args: {
    children: <div style={{ width: '300px', height: '300px' }} />,
    isOpen: true
  }
} as ComponentMeta<typeof Modal>

export const Default: ComponentStoryObj<typeof Modal> = {}

export const FromTop: ComponentStoryObj<typeof Modal> = {
  args: {
    direction: 'top'
  }
}

export const FromBottom: ComponentStoryObj<typeof Modal> = {
  args: {
    direction: 'bottom'
  }
}

export const FromLeft: ComponentStoryObj<typeof Modal> = {
  args: {
    direction: 'left'
  }
}

export const FromRight: ComponentStoryObj<typeof Modal> = {
  args: {
    direction: 'right'
  }
}

export const WithDismissHandler: ComponentStoryObj<typeof Modal> = {
  args: {
    onDismiss: () =>
      alert('This component was dismissed by clicking on the backdrop.')
  }
}
