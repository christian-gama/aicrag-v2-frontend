import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { screen, userEvent } from '@storybook/testing-library'
import React, { useState } from 'react'
import sleep from '@/tests/helpers/sleep'
import Button from '../Button'
import ProgressBar from './ProgressBar'

export default {
  title: 'atoms/ProgressBar',
  component: ProgressBar,
  args: {
    loading: true
  },
  decorators: [
    (story, { args }) => {
      const [isOpen, setIsOpen] = useState(!!args.loading)
      return (
        <>
          <div style={{ marginTop: '3.2rem' }}>
            <Button onClick={() => setIsOpen((prev) => !prev)} style={{ size: 'lg', mode: 'outlined' }}>
              Toggle Progress Bar
            </Button>
          </div>
          {story({ args: { ...args, loading: isOpen } })}
        </>
      )
    }
  ]
} as ComponentMeta<typeof ProgressBar>

export const Default: ComponentStoryObj<typeof ProgressBar> = {}

export const MultipleClicksOnToggle: ComponentStoryObj<typeof ProgressBar> = {
  play: async () => {
    await sleep()
    const button = screen.getByText(/toggle Progress Bar/i)

    await userEvent.click(button)
    await userEvent.click(button)
    await userEvent.click(button)
  }
}
