import React from 'react'
import ReactDOM from 'react-dom'
import '@/presentation/styles/global.css'
import Button from '@/presentation/components/button/Button'

const element = <Button loading>Click me</Button>

ReactDOM.render(element, document.getElementById('root'))
