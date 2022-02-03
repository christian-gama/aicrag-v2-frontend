import { useState } from 'react'
import { Card } from '@/components/atoms/Card'
import { Modal } from '@/components/molecules/Modal'
import { CloseIcon } from '@/components/utils/icons/CloseIcon'
import * as classes from './stylesheet'

type HelpProps = {
  isOpen?: boolean
}

export const Help: React.FC<HelpProps> = ({ isOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen)

  const onCloseHandler = () => {
    setIsModalOpen(false)
  }

  return (
    <Modal isOpen={isModalOpen}>
      <Card>
        <div onClick={onCloseHandler} data-testid="help-close">
          <CloseIcon />
        </div>
        <div className={classes.help} data-testid="help"></div>
      </Card>
    </Modal>
  )
}
