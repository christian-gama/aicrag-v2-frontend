import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import BaseInput from './BaseInput'

export default {
  title: 'atoms/BaseInput',
  component: BaseInput
} as ComponentMeta<typeof BaseInput>

const Template: ComponentStory<typeof BaseInput> = (args) => (
  <div style={{ width: '500px' }}>
    <BaseInput {...args} />
  </div>
)

export const Default = Template.bind({})

export const WithLabel = Template.bind({})
WithLabel.args = {
  label: 'Label',
  name: 'label',
  value: '',
  type: 'text'
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  label: 'Label',
  name: 'label',
  value: '',
  type: 'text',
  icon: () => <div>Icon</div>
}

export const WithError = Template.bind({})
WithError.args = {
  label: 'Label',
  name: 'label',
  value: '',
  isTouched: true,
  error: 'An error message goes here',
  type: 'text',
  validator: { validate: () => 'An error message goes here' }
}

export const WithSuccess = Template.bind({})
WithSuccess.args = {
  label: 'Label',
  name: 'label',
  isFocused: false,
  value: '',
  isTouched: true,
  isValid: true,
  type: 'text',
  validator: { validate: () => undefined }
}

export const WithValue = Template.bind({})
WithValue.args = {
  label: 'Label',
  name: 'label',
  isFocused: false,
  value: 'Value',
  isTouched: false,
  isValid: false,
  type: 'text'
}
