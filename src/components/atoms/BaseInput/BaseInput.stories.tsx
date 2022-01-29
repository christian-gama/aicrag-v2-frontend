import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { BaseInput } from './BaseInput'

export default {
  title: 'atoms/Base Input',
  component: BaseInput,
  args: {
    type: 'text'
  },
  argTypes: {
    type: {
      options: ['text', 'email', 'password', 'number', 'search'],
      control: { type: 'select' }
    },
    error: {
      control: {
        type: 'text'
      }
    },
    validator: {
      control: {
        type: 'function'
      }
    }
  },
  decorators: [(story) => <div style={{ width: '500px' }}>{story()}</div>]
} as ComponentMeta<typeof BaseInput>

export const Default: ComponentStoryObj<typeof BaseInput> = {}

export const Playground: ComponentStoryObj<typeof BaseInput> = {
  args: {
    validator: { validate: () => undefined },
    isFocused: false,
    isTouched: false,
    error: undefined,
    isValid: false,
    label: 'Label',
    name: 'label',
    type: 'text',
    value: ''
  }
}

export const WithError: ComponentStoryObj<typeof BaseInput> = {
  args: {
    validator: { validate: () => 'An error message goes here' },
    error: 'An error message goes here',
    isTouched: true,
    label: 'Label',
    readOnly: true,
    name: 'label',
    type: 'text',
    value: ''
  }
}

export const WithIcon: ComponentStoryObj<typeof BaseInput> = {
  args: {
    icon: () => <div>Icon</div>,
    label: 'Label',
    readOnly: true,
    name: 'label',
    type: 'text',
    value: ''
  }
}

export const WithLabel: ComponentStoryObj<typeof BaseInput> = {
  args: {
    label: 'Label',
    readOnly: true,
    name: 'label',
    type: 'text',
    value: ''
  }
}

export const WithSuccess: ComponentStoryObj<typeof BaseInput> = {
  args: {
    validator: { validate: () => undefined },
    isFocused: false,
    isTouched: true,
    label: 'Label',
    readOnly: true,
    isValid: true,
    name: 'label',
    type: 'text',
    value: ''
  }
}

export const WithValue: ComponentStoryObj<typeof BaseInput> = {
  args: {
    isFocused: false,
    isTouched: false,
    isValid: false,
    label: 'Label',
    readOnly: true,
    name: 'label',
    value: 'Value',
    type: 'text'
  }
}
