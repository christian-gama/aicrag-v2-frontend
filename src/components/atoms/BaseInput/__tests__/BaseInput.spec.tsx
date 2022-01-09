import { render, screen } from '@testing-library/react'
import React from 'react'
import BaseInput from '../BaseInput'
import BaseInputProps from '../protocols/BaseInput.model'

const makeSut = (props: BaseInputProps) => {
  return render(<BaseInput {...props} />)
}

describe('BaseInput ', () => {
  it('should render correctly', () => {
    makeSut({ label: 'Any name', name: 'any_name' })

    const baseInput = screen.getByTestId('base-input')

    expect(baseInput).toBeInTheDocument()
  })
})
