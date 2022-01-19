import '../src/components/_settings/global.css'
import addOverlayRoot from './addOverlayRoot'

addOverlayRoot()

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
