import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { BaseSelectInput } from './BaseSelectInput'

export default {
  title: 'atoms/Inputs/Base Select Input',
  component: BaseSelectInput,
  args: {
    options: [{ value: '', label: '' }]
  },
  decorators: [(story) => <div style={{ width: '500px' }}>{story()}</div>]
} as ComponentMeta<typeof BaseSelectInput>

export const Default: ComponentStoryObj<typeof BaseSelectInput> = {}

export const Playground: ComponentStoryObj<typeof BaseSelectInput> = {
  args: {
    options: [{ value: '', label: '' }],
    label: 'Label',
    name: 'label',
    value: ''
  }
}
