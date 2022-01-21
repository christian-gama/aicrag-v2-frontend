import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import React from 'react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import ForgotPasswordCardComponent from './ForgotPasswordCard'

export default {
  title: 'templates/entry/Forgot Password Card',
  component: ForgotPasswordCardComponent,
  decorators: [
    (story: any) => (
      <MemoryRouter>
        <Routes>
          <Route path="/" element={story()} />
        </Routes>
      </MemoryRouter>
    )
  ]
} as ComponentMeta<typeof ForgotPasswordCardComponent>

export const ForgotPasswordCard: ComponentStoryObj<
  typeof ForgotPasswordCardComponent
> = {}
