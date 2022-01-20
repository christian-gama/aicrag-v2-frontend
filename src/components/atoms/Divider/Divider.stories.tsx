import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import React from 'react'
import Divider from './Divider'

export default {
  title: 'atoms/Divider',
  component: Divider,
  decorators: [
    (story) => (
      <div style={{ backgroundColor: '#555', width: '100vw', height: '100vh', padding: '2.4rem' }}>{story()}</div>
    )
  ]
} as ComponentMeta<typeof Divider>

export const Default: ComponentStoryObj<typeof Divider> = {}
