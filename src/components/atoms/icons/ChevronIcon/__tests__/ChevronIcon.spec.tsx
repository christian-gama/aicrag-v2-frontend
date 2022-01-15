import { cleanup, render, screen } from '@testing-library/react'
import React, { ComponentPropsWithRef } from 'react'
import ChevronIcon from '../ChevronIcon'

const makeSut = (props: ComponentPropsWithRef<typeof ChevronIcon>) => {
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
