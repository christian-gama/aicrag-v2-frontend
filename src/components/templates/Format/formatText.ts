const quotesFormat = {
  '\\?"': '"?',
  '\\."': '".',
  '\\!"': '"!'
} as any

const specials = {
  '\\s\\-': '',
  '\\s\\—': '',
  '\\s\\–': '',
  '^\\-': '',
  '^\\—': '',
  '^\\–': '',
  '\\-\\s': '',
  '\\s\\—\\s': '',
  '\\s\\–\\s': '',
  '“|”': '"',
  '\\n': ' ',
  '\\.\\.\\.': '.',
  '…': '.',
  '\\s{2,}': ' ',
  '^\\s': ''
} as any

const punctuation = {
  ' \\. ': '. ',
  ' : ': ': ',
  ' ; ': '; ',
  ' \\? ': '? ',
  ' \\! ': '! ',
  ' \\, ': ', ',
  '\\bponto de interrogação\\b': '{ponto de interrogação}',
  '\\bponto de exclamação\\b': '{ponto de exclamação}',
  '\\bvírgula\\b': '{vírgula}',
  '\\breticências\\b': '{reticências}',
  '\\bapóstrofo\\b': '{apóstrofo}',
  '\\bparênteses\\b': '{parênteses}',
  '\\baspas\\b': '{aspas}'
} as any

const abbreviations = {
  'srta\\.': 'Srta.',
  'sra\\.': 'Sra.',
  'sr\\.': 'Sr.',
  'dr\\.': 'Dr.'
} as any

const spelling = {
  '\\b(okay|ok)\\b': 'OK',
  '\\bpra\\b': 'para',
  '\\bwhatsapp\\b': 'WhatsApp',
  '\\byoutube\\b': 'YouTube',
  '\\bgoogle\\b': 'Google',
  '\\bfacebook\\b': 'Facebook',
  '\\binstagram\\b': 'Instagram',
  '\\btwitter\\b': 'Twitter'
} as any

const unitMeasure = {
  // comprimento
  milímetro: 'mm',
  centímetro: 'cm',
  decímetro: 'dm',
  metro: 'm',
  decâmetro: 'dam',
  hectômetro: 'hm',
  quilômetro: 'km',
  milímetros: 'mm',
  centímetros: 'cm',
  decímetros: 'dm',
  metros: 'm',
  decâmetros: 'dam',
  hectômetros: 'hm',
  quilômetros: 'km',

  // volume
  mililitro: 'ml',
  centilitro: 'cl',
  decilitro: 'dl',
  litro: 'l',
  decalitro: 'dal',
  quilolitro: 'kl',
  mililitros: 'ml',
  centilitros: 'cl',
  decilitros: 'dl',
  litros: 'l',
  decalitros: 'dal',
  quilolitros: 'kl',

  // massa
  miligrama: 'mg',
  centigrama: 'cg',
  decigrama: 'dg',
  grama: 'g',
  decagrama: 'dag',
  quilograma: 'kg',
  miligramas: 'mg',
  centigramas: 'cg',
  decigramas: 'dg',
  gramas: 'g',
  decagramas: 'dag',
  quilogramas: 'kg'
} as any

export const formatText = (text: string) => {
  let preparedText = text

  preparedText = preparedText.replace(/\w+-$/g, '')

  Object.keys(quotesFormat).forEach((key) => {
    preparedText = preparedText.replace(new RegExp(key, 'g'), quotesFormat[key])
  })

  Object.keys(specials).forEach((key) => {
    preparedText = preparedText.replace(new RegExp(key, 'ig'), specials[key])
  })

  Object.keys(spelling).forEach((key) => {
    preparedText = preparedText.replace(new RegExp(key, 'ig'), spelling[key])
  })

  preparedText = preparedText.replace(
    /\b(\w+)\$([0-9]+)\b/g,
    (_, currency: string, number: string) => {
      return `${currency.toUpperCase()}$ ${number}`
    }
  )

  preparedText = preparedText.replace(/\$([0-9]+)/g, (_, number: string) => {
    return `$ ${number}`
  })

  Object.keys(punctuation).forEach((key) => {
    preparedText = preparedText.replace(new RegExp(key, 'ig'), punctuation[key])
  })

  Object.keys(abbreviations).forEach((key) => {
    preparedText = preparedText.replace(
      new RegExp(key, 'g'),
      abbreviations[key]
    )
  })

  preparedText = preparedText.replace(
    /(\d+\s*)(\w+)/gi,
    (_, number: string, word: string) => {
      if (word in unitMeasure) {
        return `${number}${unitMeasure[word] as string}`
      }

      return `${number} ${word}`
    }
  )

  // match numbers that does not include comma or dot then format with dots
  preparedText = preparedText.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  // capitalize next word after punctuation
  preparedText = preparedText.replace(
    /([.!?]\s+)([a-z])/g,
    (_, p1: string, p2: string) => {
      return `${p1}${p2.toUpperCase()}`
    }
  )

  // capitalize next word after truncation
  preparedText = preparedText.replace(
    /(\w+-\s)([a-z])/g,
    (_, p1: string, p2: string) => {
      return `${p1}${p2.toUpperCase()}`
    }
  )

  // remove comma from numbers in sequence as: "1, 2, 3, 10, 100" => "1 2 3 10 100"
  preparedText = preparedText.replace(/(\d+)(,)\s{1,}/g, '$1 ')

  return preparedText
}
