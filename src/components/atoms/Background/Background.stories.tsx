import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import Background from './Background'

export default {
  title: 'atoms/Background',
  component: Background
} as ComponentMeta<typeof Background>

const Template: ComponentStory<typeof Background> = (args) => <Background {...args} />

export const Default = Template.bind({})

export const Gradient = Template.bind({})
Gradient.args = {
  gradient: true
}
