import React from 'react'
import ReactDOM from 'react-dom'
import '@/presentation/styles/global.css'
import Input from '@/presentation/components/input/Input'

const Element: React.FC = () => {
  const validation = (value: string): { isValid: boolean, error: string } => {
    const isValid = value.length > 5
    return {
      isValid: isValid,
      error: isValid ? '' : 'Error'
    }
  }

  return (
    <Input label="Teste" type="text" validation={validation}>
      Click me
    </Input>
  )
}

ReactDOM.render(<Element />, document.getElementById('root'))
