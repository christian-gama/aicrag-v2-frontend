import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import ProgressBarProps from './ProgressBar.model'
import * as style from './stylesheet'

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (props.loading && !isOpen) {
      setIsOpen(true)
    }
  }, [props.loading])

  useEffect(() => {
    if (props.loading && !isOpen) {
      setIsOpen(true)
    }
  }, [props.loading])

  useEffect(() => {
    if (!props.loading && isOpen) {
      /* istanbul ignore next */
      const timer = setTimeout(() => {
        setIsOpen(false)
      }, 1250)

      return () => clearTimeout(timer)
    }
  }, [props.loading])

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className={style.progressBar} data-testid="progress-bar">
      <div className={style.progressBarBackground}>
        <div className={style.progressBarProgress} data-testid="progress" />
      </div>
    </div>,

    document.querySelector('#overlay-root') as HTMLElement
  )
}

export default ProgressBar
