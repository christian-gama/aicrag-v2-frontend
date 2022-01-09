import ButtonProps from '../protocols/Button.model'

export const getLoadingColor = (style: ButtonProps['style']): 'white' | 'main' => {
  if ((!style?.mode || style?.mode === 'contained') && style?.color !== 'light') {
    return 'white'
  }

  return 'main'
}
