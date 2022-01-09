import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import ChevronIcon from '../ChevronIcon'
import ChevronIconProps from '../protocols/ChevronIcon.model'

const makeSut = (props: ChevronIconProps) => {
  return render(<ChevronIcon {...props} />)
}

describe('ChevronIcon ', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render correctly', () => {
    makeSut({ direction: 'right' })

    const chevronIcon = screen.getByTestId('chevron-icon')

    expect(chevronIcon).toBeInTheDocument()
  })
})
