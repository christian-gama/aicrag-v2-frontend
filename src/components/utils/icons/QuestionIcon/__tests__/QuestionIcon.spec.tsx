import { render, cleanup, screen } from '@testing-library/react'
import { QuestionIcon } from '..'

describe('QuestionIcon', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<QuestionIcon />)
    const questionIcon = screen.getByTestId('question-icon')

    expect(questionIcon).toBeInTheDocument()
  })
})
