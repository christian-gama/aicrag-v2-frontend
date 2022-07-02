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
  '\\?\\!': '?',
  '\\?\\?': '?',
  '\\!\\!': '!',
  '\\!\\?': '?'
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
  '\\btwitter\\b': 'Twitter',
  '\\bon-line\\b': 'online',
  '\\bave\\s+maria\\b': 'Ave Maria',
  '\\b(b)em\\s+vind(o|a)(s?)\\b': '$1em-vind$2$3'
} as any

const units = {
  um: '1',
  uma: '1',
  dois: '2',
  duas: '2',
  três: '3',
  quatro: '4',
  cinco: '5',
  seis: '6',
  sete: '7',
  oito: '8',
  nove: '9',
  dez: '10'
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

  preparedText = clearSpaces(preparedText)
  preparedText = removeTruncatedWord(preparedText)
  preparedText = formatQuotes(preparedText)
  preparedText = formatSpecials(preparedText)
  preparedText = formatSpelling(preparedText)
  preparedText = formatCurrency(preparedText)
  preparedText = formatAbbreviations(preparedText)
  preparedText = formatPunctuation(preparedText)
  preparedText = formatTime(preparedText)
  preparedText = formatUnitMeasure(preparedText)
  preparedText = formatNumbers(preparedText)
  preparedText = insertDotInNumbers(preparedText)
  preparedText = capitalizeNextWordAfterPunctuation(preparedText)
  preparedText = capitalizeNextWordAfterTruncation(preparedText)
  preparedText = clearSpaces(preparedText)
  preparedText = trimText(preparedText)

  return preparedText
}

const trimText = (text: string) => {
  return text.trimStart().trimEnd()
}

const capitalizeNextWordAfterTruncation = (text: string) => {
  return text.replace(
    /(\w+-\s)([a-z])/g,
    (_, p1: string, p2: string) => {
      return `${p1}${p2.toUpperCase()}`
    }
  )
}

const clearSpaces = (text: string) => {
  return text.replace(/\s{2,}/g, ' ')
}

const removeTruncatedWord = (text: string) => {
  return text.replace(/\b\w+-($|\s+)\b/g, '')
}

const formatQuotes = (text: string) => {
  let result = text

  Object.keys(quotesFormat).forEach((key) => {
    result = result.replace(new RegExp(key, 'g'), quotesFormat[key])
  })

  return result
}

const formatSpecials = (text: string) => {
  let result = text

  Object.keys(specials).forEach((key) => {
    result = result.replace(new RegExp(key, 'ig'), specials[key])
  })

  return result
}

const formatSpelling = (text: string) => {
  let result = text

  Object.keys(spelling).forEach((key) => {
    result = result.replace(new RegExp(key, 'ig'), spelling[key])
  })

  return result
}

const formatCurrency = (text: string) => {
  let result = text

  result = result.replace(
    /\b(\w+)\$([0-9]+)\b/g,
    (_, currency: string, number: string) => {
      return `${currency.toUpperCase()}$ ${number}`
    }
  )

  result = result.replace(/\$([0-9]+)/g, (_, number: string) => {
    return `$ ${number}`
  })

  return result
}

const formatAbbreviations = (text: string) => {
  let result = text

  Object.keys(abbreviations).forEach((key) => {
    result = result.replace(
      new RegExp(key, 'g'),
      abbreviations[key]
    )
  })

  return result
}

const formatPunctuation = (text: string) => {
  let result = text

  Object.keys(punctuation).forEach((key) => {
    result = result.replace(new RegExp(key, 'ig'), punctuation[key])
  })

  return result
}

const formatTime = (text: string) => {
  return text.replace(
    /\b(dois|duas|três|quatro|cinco|seis|sete|oito|nove)\s+(segundos?|minutos?|horas?)\b/gi,
    (_, number: string, unit: string) => {
      return `${units[number] as string} ${unit}`
    }
  )
}

const formatUnitMeasure = (text: string) => {
  return text.replace(
    /(\d+)\s+(\w+)/gi,
    (_, number: string, word: string) => {
      if (word in unitMeasure) {
        return `${number} ${unitMeasure[word] as string}`
      }

      return `${number} ${word}`
    }
  )
}

const formatNumbers = (text: string) => {
  return text.replace(
    /\b(uma?|dois|duas|três|quatro|cinco|seis|sete|oito|nove|dez)\s+(mil|milhão|milhões|bilhão|bilhões|trilhão|trilhões)\s?(e meio|)\b/ig,
    (_, number: string, word: string, meio: string) => {
      return `${units[number] as string} ${word}${!meio ? '' : ' e 1/2'}`
    })
}

const insertDotInNumbers = (text: string) => {
  return text.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

const capitalizeNextWordAfterPunctuation = (text: string) => {
  return text.replace(
    /([.!?]\s+)([a-z])/g,
    (_, p1: string, p2: string) => {
      return `${p1}${p2.toUpperCase()}`
    }
  )
}
