import { ComponentStory, ComponentMeta } from '@storybook/react'
import { screen, userEvent } from '@storybook/testing-library'
import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

export default {
  title: 'atoms/ProgressBar',
  component: ProgressBar
} as ComponentMeta<typeof ProgressBar>

const Template: ComponentStory<typeof ProgressBar> = (args) => {
  const [isOpen, setIsOpen] = useState(!!args.loading)

  return (
    <>
      <button style={{ marginTop: '16px' }} onClick={() => setIsOpen((prev) => !prev)}>
        Toggle Progress Bar
      </button>
      <ProgressBar loading={isOpen} />
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  loading: true
}

export const MultipleClicksOnToggle = Template.bind({})
MultipleClicksOnToggle.args = {
  loading: true
}
MultipleClicksOnToggle.play = async () => {
  const button = screen.getByText('Toggle Progress Bar')

  await userEvent.click(button)
  await userEvent.click(button)
  await userEvent.click(button)
}
