import { ComponentPropsWithRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import * as classes from './stylesheet'
import { LinkVariants } from './stylesheet'

type LinkProps = {
  type?: LinkVariants['type']
} & ComponentPropsWithRef<typeof RouterLink>

export const Link: React.FC<LinkProps> = ({ type, children, ...rest }) => {
  return (
    <RouterLink className={classes.link({ type })} data-testid="link" {...rest}>
      {children}
    </RouterLink>
  )
}

Link.defaultProps = {
  type: 'default'
}
