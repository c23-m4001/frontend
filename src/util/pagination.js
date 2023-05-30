export const loadPages = ({ paginationLimit, maxVisiblePage, totalData }) => {
  const halfMaxVisiblePage = Math.floor(maxVisiblePage / 2)
  const totalPages = Math.ceil(totalData / paginationLimit)
  const currentPage =
    parseInt(new URLSearchParams(window.location.search).get('page')) || 1

  const startPage = Math.max(currentPage - halfMaxVisiblePage, 1)
  const endPage = Math.min(currentPage + halfMaxVisiblePage, totalPages)

  const createPages = []

  if (startPage !== 1) {
    createPages.push({
      value: 1,
      is_active: true,
    })
  }

  if (startPage > 2) {
    createPages.push({
      value: '...',
      is_active: false,
    })
  }
  for (let i = startPage; i <= endPage; i++) {
    createPages.push({
      value: i,
      is_active: true,
    })
  }

  if (endPage < totalPages - 1) {
    createPages.push({
      value: '...',
      is_active: false,
    })
  }

  if (endPage !== totalPages) {
    createPages.push({
      value: totalPages,
      is_active: true,
    })
  }

  return createPages
}
