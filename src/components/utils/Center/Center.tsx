import React from 'react'
import * as style from './stylesheet'

const Center: React.FC = ({ children }) => {
  return (
    <div className={style.center} data-testid="center">
      {children}
    </div>
  )
}

export default Center
