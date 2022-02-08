import { render, cleanup, screen } from '@testing-library/react'
import { TrashIcon } from '..'

describe('TrashIcon', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<TrashIcon />)
    const trashIcon = screen.getByTestId('trash-icon')

    expect(trashIcon).toBeInTheDocument()
  })
})
