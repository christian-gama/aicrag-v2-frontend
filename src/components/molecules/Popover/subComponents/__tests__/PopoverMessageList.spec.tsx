import { render, screen } from '@testing-library/react'
import React from 'react'
import PopoverMessageList from '..'

describe('PopoverMessageList', () => {
  it('should render the message from messages', () => {
    const messages = ['message 1', 'message 2']

    render(<PopoverMessageList messages={messages} />)

    expect(screen.getByText(messages[0])).toBeInTheDocument()
    expect(screen.getByText(messages[1])).toBeInTheDocument()
  })
})
