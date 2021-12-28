import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Button from '../Button'

describe('Button', () => {
  afterEach(() => {
    cleanup()
  })

  it('should have "click me" as text inside button', () => {
    render(<Button>Click me</Button>)

    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('should have a svg icon in the document when has loading prop as true', () => {
    render(<Button loading>Click me</Button>)

    expect(screen.getByRole('spinbutton')).toBeInTheDocument()
  })

  it('should have disabled attribute when has disabled prop as true', () => {
    render(<Button disabled>Click me</Button>)

    expect(screen.getByText('Click me')).toHaveAttribute('disabled')
  })

  it('should not execute onClick if disabled', () => {
    const onClick = jest.fn()
    render(
      <Button disabled onClick={onClick} testid="button">
        Click me
      </Button>
    )

    const button = screen.getByTestId('button')
    userEvent.click(button)

    expect(onClick).not.toHaveBeenCalled()
  })

  it('should execute onClick if not disabled', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Click me</Button>)

    const button = screen.getByText('Click me')
    userEvent.click(button)

    expect(onClick).toHaveBeenCalled()
  })

  it('should not execute onClick if loading', () => {
    const onClick = jest.fn()

    render(
      <Button loading onClick={onClick} testid="button">
        Click me
      </Button>
    )

    const button = screen.getByTestId('button')
    userEvent.click(button)

    expect(onClick).not.toHaveBeenCalled()
  })

  it('should not execute onClick if loading and has mode as outlined', () => {
    const onClick = jest.fn()
    render(
      <Button
        loading
        onClick={onClick}
        style={{
          mode: 'outlined'
        }}
      >
        Click me
      </Button>
    )

    const spinner = screen.getByRole('spinbutton')
    userEvent.click(spinner)

    expect(onClick).not.toHaveBeenCalled()
  })

  it('should execute onClick if not loading', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Click me</Button>)

    const button = screen.getByText('Click me')
    userEvent.click(button)

    expect(onClick).toHaveBeenCalled()
  })

  it('should not execute onClick if not passed through props', () => {
    const onClick = jest.fn()
    render(<Button>Click me</Button>)

    const button = screen.getByText('Click me')
    userEvent.click(button)

    expect(onClick).not.toHaveBeenCalled()
  })
})
