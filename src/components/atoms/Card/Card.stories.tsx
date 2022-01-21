import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import React from 'react'
import Card from './Card'

export default {
  title: 'atoms/Card',
  component: Card,
  args: {
    children: (
      <div style={{ width: '300px', height: '300px' }}>
        <div
          style={{
            width: '33%',
            height: '33%',
            backgroundColor: 'orangered'
          }}></div>
      </div>
    )
  },
  decorators: [
    (story) => (
      <div
        style={{
          backgroundColor: '#555',
          width: '100vw',
          height: '100vh',
          padding: '1.2rem'
        }}>
        {story()}
      </div>
    )
  ]
} as ComponentMeta<typeof Card>

export const Default: ComponentStoryObj<typeof Card> = {
  args: {
    children: <div style={{ width: '300px', height: '300px' }} />
  }
}

export const Playground: ComponentStoryObj<typeof Card> = {
  argTypes: {
    centered: {
      control: {
        type: 'boolean'
      }
    },
    roundness: {
      control: {
        type: 'select',
        options: ['none', 'sm', 'md', 'lg', 'xl']
      }
    }
  },
  args: {
    centered: false,
    roundness: 'sm',
    style: {
      height: '300px',
      width: '300px',
      margin: '0rem',
      padding: '0rem'
    },
    children: <></>
  }
}

export const Centered: ComponentStoryObj<typeof Card> = {
  args: { centered: true }
}

export const WithNoRoundness: ComponentStoryObj<typeof Card> = {
  args: { roundness: 'none' }
}

export const WithSmallRoundness: ComponentStoryObj<typeof Card> = {
  args: { roundness: 'sm' }
}

export const WithMediumRoundness: ComponentStoryObj<typeof Card> = {
  args: { roundness: 'md' }
}

export const WithLargeRoundness: ComponentStoryObj<typeof Card> = {
  args: { roundness: 'lg' }
}

export const WithExtraLargeRoundness: ComponentStoryObj<typeof Card> = {
  args: { roundness: 'xl' }
}

export const WithPadding: ComponentStoryObj<typeof Card> = {
  args: {
    style: {
      padding: '10px'
    }
  }
}

export const WithMargin: ComponentStoryObj<typeof Card> = {
  args: {
    style: {
      margin: '50px'
    }
  }
}
