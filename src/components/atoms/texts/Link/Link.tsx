import React, { ComponentPropsWithRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import * as style from './stylesheet'

type LinkProps = ComponentPropsWithRef<typeof RouterLink>

const Link: React.FC<LinkProps> = ({ children, ...rest }) => {
  return (
    <RouterLink className={style.link} data-testid="link" {...rest}>
      {children}
    </RouterLink>
  )
}

export default Link
