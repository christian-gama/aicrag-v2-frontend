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
  '\\w+\\-\\s': '',
  '\\w+\\-$': ''
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

const spelling = {
  '\\b(okay|ok)\\b': 'OK',
  '\\bpra\\b': 'para',
  '\\bwhatsapp\\b': 'WhatsApp',
  '\\byoutube\\b': 'YouTube',
  '\\bgoogle\\b': 'Google',
  '\\bfacebook\\b': 'Facebook',
  '\\binstagram\\b': 'Instagram',
  '\\btwitter\\b': 'Twitter',
  '\\bR\\$([0-9]+)\\b': 'R$ $1',
  '\\bU\\$([0-9]+)\\b': 'U$ $1'
} as any

export const formatText = (text: string) => {
  let preparedText = text

  Object.keys(quotesFormat).forEach((key) => {
    preparedText = preparedText.replace(new RegExp(key, 'g'), quotesFormat[key])
  })

  Object.keys(specials).forEach((key) => {
    preparedText = preparedText.replace(new RegExp(key, 'ig'), specials[key])
  })

  Object.keys(spelling).forEach((key) => {
    preparedText = preparedText.replace(new RegExp(key, 'ig'), spelling[key])
  })

  Object.keys(punctuation).forEach((key) => {
    preparedText = preparedText.replace(new RegExp(key, 'g'), punctuation[key])
  })

  // match numbers that does not include comma or dot then format with dots
  preparedText = preparedText.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

  preparedText = preparedText.replace(
    /([.!?]\s+)([a-z])/g,
    (_, p1: string, p2: string) => {
      return `${p1}${p2.toUpperCase()}`
    }
  )

  return preparedText
}
