import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import Menu from './Menu'

export default {
  title: 'molecules/Menu',
  component: Menu,
  decorators: [
    (story) => (
      <MemoryRouter>
        <Routes>
          <Route path="/" element={story()} />
        </Routes>
      </MemoryRouter>
    )
  ]
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = (args) => (
  <div style={{ width: '500px' }}>
    <Menu {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  buttons: [
    { buttonName: 'Button 1', to: 'molecules-menu--default' },
    { buttonName: 'Button 2', to: 'molecules-menu--default' },
    { buttonName: 'Button 3', to: 'molecules-menu--default' }
  ],
  url: '/?path=/story/'
}
