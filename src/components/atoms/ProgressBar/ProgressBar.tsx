import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import * as style from './stylesheet'

type ProgressBarProps = {
  loading?: boolean
}

const ProgressBar: React.FC<ProgressBarProps> = ({ loading }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (loading && !isOpen) {
      setIsOpen(true)
    }
  }, [loading])

  useEffect(() => {
    if (loading && !isOpen) {
      setIsOpen(true)
    }
  }, [loading])

  useEffect(() => {
    if (!loading && isOpen) {
      /* istanbul ignore next */
      const timer = setTimeout(() => {
        setIsOpen(false)
      }, 1250)

      return () => clearTimeout(timer)
    }
  }, [loading])

  if (!isOpen) return null

  const overlayRoot = document.getElementById('overlay-root') as HTMLElement

  return ReactDOM.createPortal(
    <div className={style.progressBar} data-testid="progress-bar">
      <div className={style.progressBarBackground}>
        <div className={style.progressBarProgress} data-testid="progress" />
      </div>
    </div>,

    overlayRoot
  )
}

export default ProgressBar
