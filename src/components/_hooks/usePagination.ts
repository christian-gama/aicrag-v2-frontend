import { useEffect, useState } from 'react'

export const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    setTotalPages(totalPages)
  }, [totalPages])

  useEffect(() => {
    setCurrentPage(currentPage)
  }, [currentPage])

  const previousPageHandler = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const nextPageHandler = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  return {
    previousPageHandler,
    nextPageHandler,
    setCurrentPage,
    setTotalPages,
    currentPage,
    totalPages
  }
}
