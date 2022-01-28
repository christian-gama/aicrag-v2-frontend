import React, { ComponentPropsWithRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import * as styles from './stylesheet'
import { LinkVariants } from './stylesheet'

type LinkProps = {
  type?: LinkVariants['type']
} & ComponentPropsWithRef<typeof RouterLink>

const Link: React.FC<LinkProps> = ({ type, children, ...rest }) => {
  return (
    <RouterLink className={styles.link({ type })} data-testid="link" {...rest}>
      {children}
    </RouterLink>
  )
}

Link.defaultProps = {
  type: 'default'
}

export default Link
