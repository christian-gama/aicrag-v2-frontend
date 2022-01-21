import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import React from 'react'
import HorizontalScrollBar from './HorizontalScrollBar'

export default {
  title: 'atoms/Horizontal Scroll Bar',
  component: HorizontalScrollBar,
  args: {
    children: (
      <div
        style={{
          width: '2000px',
          height: '48px',
          backgroundImage: 'linear-gradient(to right, #f00, #00f)'
        }}
      />
    )
  }
} as ComponentMeta<typeof HorizontalScrollBar>

export const Default: ComponentStoryObj<typeof HorizontalScrollBar> = {}

export const Playground: ComponentStoryObj<typeof HorizontalScrollBar> = {
  args: {
    width: '100vw'
  },
  argTypes: {
    width: {
      control: {
        type: 'text'
      }
    }
  }
}
export const WithWidth: ComponentStoryObj<typeof HorizontalScrollBar> = {
  args: {
    width: '320px'
  }
}
