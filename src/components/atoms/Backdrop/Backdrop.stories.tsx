import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import React from 'react'
import Backdrop from './Backdrop'

export default {
  title: 'atoms/Backdrop',
  component: Backdrop,
  decorators: [
    (story) => {
      return (
        <>
          {story()}
          <div
            style={{
              backgroundImage: 'url(https://source.unsplash.com/1920x1080)',
              width: '100vw',
              height: '100vh',
              position: 'absolute',
              top: 0,
              left: 0
            }}
          />
        </>
      )
    }
  ],
  args: {
    isOpen: true
  }
} as ComponentMeta<typeof Backdrop>

export const Default: ComponentStoryObj<typeof Backdrop> = {
  args: {
    onDismiss: () =>
      alert('This component was dismissed by clicking on the backdrop.')
  }
}
