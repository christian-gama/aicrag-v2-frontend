import { formatText } from '../formatText'

describe('format', () => {
  it('formata pontuação de aspas corretamente', () => {
    expect(formatText('"abc." Abc: "abc abc."')).toBe('"abc". Abc: "abc abc".')
  })

  it('remove espaços duplos', () => {
    expect(formatText('abc  abc')).toBe('abc abc')
    expect(formatText('abc  abc   abc')).toBe('abc abc abc')
  })

  it('formata quebra de linha', () => {
    expect(formatText('This is a text with \n a new line')).toBe(
      'This is a text with a new line'
    )
  })

  it('remove traços e travessões', () => {
    expect(formatText("This is a text with -, but shouldn't have it.")).toBe(
      "This is a text with, but shouldn't have it."
    )

    expect(formatText("This is a text with —, but shouldn't have it.")).toBe(
      "This is a text with, but shouldn't have it."
    )
  })

  it('troca “ ou ” por "', () => {
    expect(formatText('“This is a text with wrong quotes.”')).toBe(
      '"This is a text with wrong quotes."'
    )
  })

  it('substitui variantes do OK', () => {
    expect(formatText('ok')).toBe('OK')
    expect(formatText('okay')).toBe('OK')
    expect(formatText('Okay Ok OK okalandia')).toBe('OK OK OK okalandia')
  })

  it('substitui variantes do para', () => {
    expect(formatText('para')).toBe('para')
    expect(formatText('pra')).toBe('para')
    expect(formatText('parado')).toBe('parado')
  })

  it('remove palavras truncadas', () => {
    expect(formatText('caramba, por-')).toBe('caramba, ')
  })

  it('formata moedas', () => {
    expect(formatText('R$1.000,00')).toBe('R$ 1.000,00')
    expect(formatText('u$2.000,00')).toBe('U$ 2.000,00')
  })

  it('formata números corretamente', () => {
    expect(formatText('1.000.000')).toBe('1.000.000')
    expect(formatText('1.000.000,00')).toBe('1.000.000,00')
    expect(formatText('1000')).toBe('1.000')
    expect(formatText('10000')).toBe('10.000')
  })

  it('integra todos os filtros', () => {
    const text1 =
      'Esse é um texto  bem longo ! Ele tem vários erros - mas todos serão corrigidos, okay? "Parabéns pra você!"'
    expect(formatText(text1)).toBe(
      'Esse é um texto bem longo! Ele tem vários erros mas todos serão corrigidos, OK? "Parabéns para você"!'
    )

    const text2 =
      'O whatsapp é do facebook, assim como o instagram ponto de exclamação\n Já o youtube é do Google…"'
    expect(formatText(text2)).toBe(
      'O WhatsApp é do Facebook, assim como o Instagram {ponto de exclamação} Já o YouTube é do Google."'
    )
  })
})
