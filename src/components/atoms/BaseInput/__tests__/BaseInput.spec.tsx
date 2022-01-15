import { render, screen } from '@testing-library/react'
import React, { ComponentPropsWithRef } from 'react'
import BaseInput from '../BaseInput'

const makeSut = (props: ComponentPropsWithRef<typeof BaseInput>) => {
  return render(<BaseInput {...props} />)
}

describe('BaseInput ', () => {
  it('should render correctly', () => {
    makeSut({ label: 'Any name', name: 'any_name' })

    const baseInput = screen.getByTestId('base-input')

    expect(baseInput).toBeInTheDocument()
  })
})
