import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import * as classes from './stylesheet'

type ProgressBarProps = {
  loading?: boolean
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ loading }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (loading && !isOpen) {
      setIsOpen(true)
    }
  }, [loading])

  useEffect(() => {
    if (!loading && isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false)
      }, 1250)

      return () => clearTimeout(timer)
    }
  }, [loading])

  if (!isOpen) return null

  const overlayRoot = document.getElementById('overlay-root') as HTMLElement

  return ReactDOM.createPortal(
    <div className={classes.progressBar} data-testid="progress-bar">
      <div className={classes.progressBarBackground}>
        <div className={classes.progressBarProgress} data-testid="progress" />
      </div>
    </div>,

    overlayRoot
  )
}
