export const getPath = () => {
  const { origin, href, search } = location
  const replacedHref = href.replace(origin, '')
  const replacedSearch = search.replace('?', '')

  const result = replacedSearch === '' ? replacedHref : '/' + replacedSearch

  return result
}
