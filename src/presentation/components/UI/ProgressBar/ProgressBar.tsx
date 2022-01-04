import React from 'react'
import ProgressBarProps from './ProgressBar.model'
import { backgroundStyle, progressBarStyle, progressStyle } from './stylesheet'

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  if (!props.loading) return null

  return (
    <div className={progressBarStyle} data-testid="progress-bar">
      <div className={backgroundStyle}>
        <div className={progressStyle} data-testid="progress" />
      </div>
    </div>
  )
}

export default ProgressBar
