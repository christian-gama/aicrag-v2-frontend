import { cleanup, render, screen } from '@testing-library/react'
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

  it('should  have "Loading..." in the document when has loading prop as true', () => {
    render(<Button loading>Click me</Button>)

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('should have disabled attribute when has disabled prop as true', () => {
    render(<Button disabled>Click me</Button>)

    expect(screen.getByText('Click me')).toHaveAttribute('disabled')
  })

  it('should not execute onClick if disabled', () => {
    const onClick = jest.fn()
    render(
      <Button disabled onClick={onClick}>
        Click me
      </Button>
    )

    screen.getByText('Click me').click()

    expect(onClick).not.toHaveBeenCalled()
  })

  it('should execute onClick if not disabled', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Click me</Button>)

    screen.getByText('Click me').click()

    expect(onClick).toHaveBeenCalled()
  })

  it('should not execute onClick if loading', () => {
    const onClick = jest.fn()
    render(
      <Button loading onClick={onClick}>
        Click me
      </Button>
    )

    screen.getByText('Loading...').click()

    expect(onClick).not.toHaveBeenCalled()
  })

  it('should execute onClick if not loading', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Click me</Button>)

    screen.getByText('Click me').click()

    expect(onClick).toHaveBeenCalled()
  })
})
