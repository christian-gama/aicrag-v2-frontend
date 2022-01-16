import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import Divider from './Divider'

export default {
  title: 'atoms/Divider',
  component: Divider
} as ComponentMeta<typeof Divider>

const Template: ComponentStory<typeof Divider> = (args) => <Divider {...args} />

export const Default = Template.bind({})
