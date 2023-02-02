export const formatDate = (dateString, locale = 'en-US') => {
  if (!dateString) return ''

  const date = new Date(dateString)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString(locale, options)
}