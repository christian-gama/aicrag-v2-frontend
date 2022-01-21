import { defineConfig, Plugin } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react'
import path from 'path'

const removeAttributes = (options: { attributes: string[] }): Plugin => {
  return {
    apply: 'build',
    name: 'remove-attributes',
    transform(code) {
      options.attributes.forEach((attribute) => {
        const attributeMatcher = new RegExp(
          `(,\\s*\\"${attribute}\\" *: *\\".*\\"|(?=\\s*\\}))|(\\s*\\"${attribute}\\" *: *\\".*\\"(,|(?=\\s*\\})))`,
          'g'
        )

        code = code.replace(attributeMatcher, '')
      })

      return {
        code
      }
    }
  }
}

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },

  build: {
    outDir: 'build'
  },

  publicDir: 'public',

  plugins: [react(), vanillaExtractPlugin(), removeAttributes({ attributes: ['data-testid'] })]
})
