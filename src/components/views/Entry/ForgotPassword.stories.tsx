import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import ForgotPassword from './ForgotPassword'

export default {
  title: 'ForgotPassword',
  component: ForgotPassword
} as ComponentMeta<typeof ForgotPassword>

const Template: ComponentStory<typeof ForgotPassword> = (args) => <ForgotPassword {...args} />

export const Default = Template.bind({})
