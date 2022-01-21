import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import React from 'react'
import DividerComponent from './Divider'

export default {
  title: 'atoms/Divider',
  component: DividerComponent,
  decorators: [
    (story) => (
      <div
        style={{
          backgroundColor: '#555',
          width: '100vw',
          height: '100vh',
          padding: '2.4rem'
        }}>
        {story()}
      </div>
    )
  ]
} as ComponentMeta<typeof DividerComponent>

export const Divider: ComponentStoryObj<typeof DividerComponent> = {}
