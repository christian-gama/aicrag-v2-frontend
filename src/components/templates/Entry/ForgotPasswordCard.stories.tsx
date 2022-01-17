import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import ForgotPasswordCard from './ForgotPasswordCard'

export default {
  title: 'templates/Entry/ForgotPasswordCard',
  component: ForgotPasswordCard,
  decorators: [
    (story: any) => (
      <MemoryRouter>
        <Routes>
          <Route path="/" element={story()} />
        </Routes>
      </MemoryRouter>
    )
  ]
} as ComponentMeta<typeof ForgotPasswordCard>

const Template: ComponentStory<typeof ForgotPasswordCard> = (args) => <ForgotPasswordCard {...args} />

export const Default = Template.bind({})
