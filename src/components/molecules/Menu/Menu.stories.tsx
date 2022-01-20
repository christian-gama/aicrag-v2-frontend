import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import React from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import Menu from './Menu'

export default {
  title: 'molecules/Menu',
  component: Menu,
  decorators: [
    (story) => (
      <div style={{ width: '500px' }}>
        <MemoryRouter>
          <Routes>
            <Route path="/" element={story()} />
          </Routes>
        </MemoryRouter>
      </div>
    )
  ]
} as ComponentMeta<typeof Menu>

export const Default: ComponentStoryObj<typeof Menu> = {
  args: {
    buttons: [
      { buttonName: 'Button 1', to: '/?path=/story/molecules-menu--default', active: true },
      { buttonName: 'Button 2', to: '/?path=/story/molecules-menu--default' },
      { buttonName: 'Button 3', to: '/?path=/story/molecules-menu--default' }
    ]
  }
}
