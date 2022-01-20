import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'
import React from 'react'
import * as stories from '../Background.stories'

const { Default, Gradient } = composeStories(stories)

describe('Background', () => {
  it('should render Background correctly', () => {
    render(<Default {...Default.args} />)
    expect(screen.getByTestId('background')).toBeInTheDocument()
  })

  it('should render Background with gradient correctly', () => {
    render(<Gradient {...Gradient.args} />)
    expect(screen.getByTestId('background')).toBeInTheDocument()
  })
})
