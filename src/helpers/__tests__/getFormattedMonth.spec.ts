import { getFormattedMonth } from '../getFormattedMonth'

describe('getFormattedMonth', () => {
  it('returns the correct month names', () => {
    expect(getFormattedMonth(0, 'long')).toBe('Janeiro')
    expect(getFormattedMonth(1, 'long')).toBe('Fevereiro')
    expect(getFormattedMonth(2, 'long')).toBe('Março')
    expect(getFormattedMonth(3, 'long')).toBe('Abril')
    expect(getFormattedMonth(4, 'long')).toBe('Maio')
    expect(getFormattedMonth(5, 'long')).toBe('Junho')
    expect(getFormattedMonth(6, 'long')).toBe('Julho')
    expect(getFormattedMonth(7, 'long')).toBe('Agosto')
    expect(getFormattedMonth(8, 'long')).toBe('Setembro')
    expect(getFormattedMonth(9, 'long')).toBe('Outubro')
    expect(getFormattedMonth(10, 'long')).toBe('Novembro')
    expect(getFormattedMonth(11, 'long')).toBe('Dezembro')
  })

  it('returns the correct short month', () => {
    expect(getFormattedMonth(0)).toBe('Jan')
    expect(getFormattedMonth(1)).toBe('Fev')
    expect(getFormattedMonth(2)).toBe('Mar')
    expect(getFormattedMonth(3)).toBe('Abr')
    expect(getFormattedMonth(4)).toBe('Mai')
    expect(getFormattedMonth(5)).toBe('Jun')
    expect(getFormattedMonth(6)).toBe('Jul')
    expect(getFormattedMonth(7)).toBe('Ago')
    expect(getFormattedMonth(8)).toBe('Set')
    expect(getFormattedMonth(9)).toBe('Out')
    expect(getFormattedMonth(10)).toBe('Nov')
    expect(getFormattedMonth(11)).toBe('Dez')
  })
})
