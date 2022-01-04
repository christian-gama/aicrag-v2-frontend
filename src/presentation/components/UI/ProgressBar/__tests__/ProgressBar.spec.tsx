import { render, screen } from '@testing-library/react'
import React from 'react'
import ProgressBar from '../ProgressBar'
import ProgressBarProps from '../ProgressBar.model'

const makeSut = (props: ProgressBarProps) => {
  return render(<ProgressBar {...props} />)
}

describe('ProgressBar', () => {
  it('should render when passing loading prop as true', () => {
    makeSut({ loading: true })

    expect(screen.getByTestId('progress-bar')).toBeInTheDocument()
  })

  it('should not render when passing loading prop as false', () => {
    makeSut({ loading: false })

    expect(screen.queryByTestId('progress-bar')).not.toBeInTheDocument()
  })
})
