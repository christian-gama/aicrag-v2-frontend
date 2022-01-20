import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import React from 'react'
import BaseInput from './BaseInput'

export default {
  title: 'atoms/BaseInput',
  component: BaseInput,
  decorators: [(story) => <div style={{ width: '500px' }}>{story()}</div>]
} as ComponentMeta<typeof BaseInput>

export const Default: ComponentStoryObj<typeof BaseInput> = {}

export const Typing: ComponentStoryObj<typeof BaseInput> = {
  args: {
    defaultValue: '',
    isFocused: true,
    isTouched: false,
    isValid: false,
    label: 'Label',
    name: 'label',
    type: 'text'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByTestId('base-input')

    await userEvent.type(input, 'Some text')
  }
}

export const WithError: ComponentStoryObj<typeof BaseInput> = {
  args: {
    error: 'An error message goes here',
    isTouched: true,
    label: 'Label',
    name: 'label',
    readOnly: true,
    type: 'text',
    value: '',
    validator: { validate: () => 'An error message goes here' }
  }
}

export const WithIcon: ComponentStoryObj<typeof BaseInput> = {
  args: {
    label: 'Label',
    name: 'label',
    readOnly: true,
    type: 'text',
    value: '',
    icon: () => <div>Icon</div>
  }
}

export const WithLabel: ComponentStoryObj<typeof BaseInput> = {
  args: {
    label: 'Label',
    name: 'label',
    readOnly: true,
    type: 'text',
    value: ''
  }
}

export const WithSuccess: ComponentStoryObj<typeof BaseInput> = {
  args: {
    isFocused: false,
    isTouched: true,
    isValid: true,
    label: 'Label',
    name: 'label',
    readOnly: true,
    type: 'text',
    value: '',
    validator: { validate: () => undefined }
  }
}

export const WithValue: ComponentStoryObj<typeof BaseInput> = {
  args: {
    isFocused: false,
    isTouched: false,
    isValid: false,
    label: 'Label',
    name: 'label',
    readOnly: true,
    type: 'text',
    value: 'Value'
  }
}
