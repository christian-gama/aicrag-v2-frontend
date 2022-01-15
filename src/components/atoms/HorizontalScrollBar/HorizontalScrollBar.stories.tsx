import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import HorizontalScrollBar from './HorizontalScrollBar'

export default {
  title: 'atoms/HorizontalScrollBar',
  component: HorizontalScrollBar
} as ComponentMeta<typeof HorizontalScrollBar>

const Template: ComponentStory<typeof HorizontalScrollBar> = (args) => (
  <HorizontalScrollBar {...args}>
    <div style={{ width: '2000px', height: '48px', backgroundImage: 'linear-gradient(to right, #f00, #0f0, #00f)' }} />
  </HorizontalScrollBar>
)

export const Default = Template.bind({})

export const WithWidth = Template.bind({})
WithWidth.args = {
  width: '320px'
}
