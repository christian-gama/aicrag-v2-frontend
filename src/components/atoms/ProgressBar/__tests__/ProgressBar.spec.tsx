import { cleanup, render, screen } from '@testing-library/react'
import React, { ComponentPropsWithRef } from 'react'
import ProgressBar from '../ProgressBar'

const makeSut = (props: ComponentPropsWithRef<typeof ProgressBar>) => {
  return render(<ProgressBar {...props} />)
}

describe('ProgressBar', () => {
  afterAll(() => {
    cleanup()
  })

  beforeAll(() => {
    const container = document.createElement('div')
    container.setAttribute('id', 'overlay-root')
    document.body.appendChild(container)
  })

  it('should render when passing loading prop as true', () => {
    makeSut({ loading: true })

    expect(screen.getByTestId('progress-bar')).toBeInTheDocument()
  })

  it('should not render when passing loading prop as false', () => {
    makeSut({ loading: false })

    expect(screen.queryByTestId('progress-bar')).not.toBeInTheDocument()
  })
})
