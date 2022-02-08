import { getPages } from '..'

describe('getPages', () => {
  it('should return the current page and total pages', () => {
    const page = '1 of 2'

    const actual = getPages(page)

    expect(actual).toStrictEqual({
      currentPage: 1,
      totalPages: 2
    })
  })
})
