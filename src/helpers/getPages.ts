export const getPages = (page: string) => {
  const [currentPage, totalPages] = page.split('of')

  return {
    currentPage: +currentPage.trim(),
    totalPages: +totalPages.trim()
  }
}
