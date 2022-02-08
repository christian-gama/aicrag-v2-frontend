export const getFormattedMonth = (
  month: number,
  type: 'long' | 'short' = 'short'
) => {
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ]

  const shortMonths = months.map((month) => month.substring(0, 3))

  return type === 'long' ? months[month] : shortMonths[month]
}
