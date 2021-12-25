import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import '@/presentation/styles/global.css'
import Button from '@/presentation/components/button/Button'
import Calendar from '@/presentation/components/calendar/Calendar'
import Modal from '@/presentation/components/modal/Modal'

const Element: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Abrir modal</Button>

      <Modal isOpen={isOpen} toggleModal={setIsOpen}>
        <Calendar />
      </Modal>
    </>
  )
}

ReactDOM.render(<Element />, document.getElementById('root'))
