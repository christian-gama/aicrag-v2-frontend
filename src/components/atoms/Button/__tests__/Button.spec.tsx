import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Button from '..'

const mockedFunction = jest.fn()
jest.mock(
  '../../icons/LoadingSpinnerIcon',
  () =>
    function mockedComponent (props: any) {
      mockedFunction(props)

      return null
    }
)

describe('Button', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<Button />)
    const button = screen.getByTestId('button')

    expect(button).toBeInTheDocument()
  })

  it('is disabled if disabled props is true', () => {
    render(<Button disabled />)
    const button = screen.getByTestId('button')

    expect(button).toBeDisabled()
    expect(button.className).toMatch(/disabled_true/gi)
  })

  it('must not call onClick if is disabled', () => {
    const onClickSpy = jest.fn()
    render(<Button disabled onClick={onClickSpy} />)
    const button = screen.getByTestId('button')

    userEvent.click(button)

    expect(onClickSpy).not.toHaveBeenCalled()
  })

  it('must not call onClick if loading', () => {
    const onClickSpy = jest.fn()
    render(<Button loading onClick={onClickSpy} />)
    const button = screen.getByTestId('button')

    userEvent.click(button)

    expect(onClickSpy).not.toHaveBeenCalled()
  })

  it('calls onClick when clicked', () => {
    const onClickSpy = jest.fn()
    render(<Button onClick={onClickSpy} />)
    const button = screen.getByTestId('button')

    userEvent.click(button)

    expect(onClickSpy).toHaveBeenCalled()
  })

  it('calls LoadingSpinner with white color if does not have a mode defined', async () => {
    render(<Button loading />)

    expect(mockedFunction).toHaveBeenCalledWith(
      expect.objectContaining({
        style: { color: 'white', size: expect.anything() }
      })
    )
  })

  it('calls LoadingSpinner with main color if mode is equal to outlined', async () => {
    render(<Button loading style={{ mode: 'outlined' }} />)

    expect(mockedFunction).toHaveBeenCalledWith(
      expect.objectContaining({
        style: { color: 'main', size: expect.anything() }
      })
    )
  })
})
