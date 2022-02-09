import { setupTests } from '@/tests/helpers'
import { render, screen } from '@testing-library/react'
import { Pagination } from '..'

describe('Pagination', () => {
  setupTests()

  it('renders correctly', () => {
    render(
      <Pagination
        previousPageHandler={jest.fn}
        nextPageHandler={jest.fn}
        currentPage={1}
        totalPages={10}
      />
    )
    const pagination = screen.getByTestId('pagination')

    expect(pagination).toBeInTheDocument()
  })

  it('does not call previousPageHandler if previousPage is disabled', () => {
    const previousPageHandler = jest.fn()
    const nextPageHandler = jest.fn()

    render(
      <Pagination
        previousPageHandler={previousPageHandler}
        nextPageHandler={nextPageHandler}
        currentPage={1}
        totalPages={10}
      />
    )

    const previousPage = screen.getByTestId('pagination-action-previous')
    previousPage.click()

    expect(previousPageHandler).not.toHaveBeenCalled()
  })

  it('does not call nextPageHandler if nextPage is disabled', () => {
    const previousPageHandler = jest.fn()
    const nextPageHandler = jest.fn()

    render(
      <Pagination
        previousPageHandler={previousPageHandler}
        nextPageHandler={nextPageHandler}
        currentPage={10}
        totalPages={10}
      />
    )

    const nextPage = screen.getByTestId('pagination-action-next')
    nextPage.click()

    expect(nextPageHandler).not.toHaveBeenCalled()
  })
})
