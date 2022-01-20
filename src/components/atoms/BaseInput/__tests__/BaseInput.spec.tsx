import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'
import React from 'react'
import * as stories from '../BaseInput.stories'

const { Default, Typing, WithError, WithIcon, WithLabel, WithSuccess, WithValue } = composeStories(stories)

describe('BaseInput ', () => {
  it('should render correctly', () => {
    render(<Default {...Default.args} />)

    const baseInput = screen.getByTestId('base-input')

    expect(baseInput).toBeInTheDocument()
  })

  it('should be able to type', async () => {
    const { container } = render(<Typing {...Typing.args} />)

    await Typing.play({ canvasElement: container })

    expect(screen.getByRole('textbox', { name: /label/i })).toBeInTheDocument()
  })

  it('should have an error if error is defined', async () => {
    render(<WithError {...WithError.args} />)

    expect(screen.getByText(/an error message goes here/i)).toBeInTheDocument()
  })

  it('should not have an error message is input has a successful state', async () => {
    render(<WithSuccess {...WithSuccess.args} />)

    expect(screen.queryByText(/an error message goes here/i)).not.toBeInTheDocument()
  })

  it('should have an icon if icon is defined', async () => {
    render(<WithIcon {...WithIcon.args} />)

    expect(screen.getByText(/icon/i)).toBeInTheDocument()
  })

  it('should have a label if label is defined', async () => {
    render(<WithLabel {...WithLabel.args} />)

    expect(screen.getByText(/label/i)).toBeInTheDocument()
  })

  it('should have a value if value is defined', async () => {
    render(<WithValue {...WithValue.args} />)

    const inputValue = document.querySelector('#label')?.getAttribute('value')

    expect(inputValue).toBe('Value')
  })
})
