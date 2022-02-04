import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { BaseDateInput } from './BaseDateInput'

export default {
  title: 'atoms/Base Date Input',
  component: BaseDateInput,
  decorators: [(story) => <div style={{ width: '500px' }}>{story()}</div>]
} as ComponentMeta<typeof BaseDateInput>

export const Default: ComponentStoryObj<typeof BaseDateInput> = {}

export const Playground: ComponentStoryObj<typeof BaseDateInput> = {
  args: {
    isFocused: false,
    label: 'Label',
    name: 'label',
    value: ''
  }
}
