import React from 'react'
import * as style from './stylesheet'

const Wrapper: React.FC = ({ children }) => {
  return (
    <div data-testid="wrapper" className={style.wrapper}>
      {children}
    </div>
  )
}

export default Wrapper
