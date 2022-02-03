import { Link } from 'react-router-dom'
import { Divider } from '@/components/utils/Divider'
import { BackIcon } from '@/components/utils/icons'
import { H2 } from '@/components/utils/texts/H2'
import * as classes from './stylesheet'

type NavHeaderProps = {
  title: string
  to?: string
  backHandler?: () => void
}

export const NavHeader: React.FC<NavHeaderProps> = (props) => {
  return (
    <>
      <div className={classes.navHeader} data-testid="nav-header">
        <div
          className={classes.navHeaderBack}
          data-testid="nav-header-back"
          onClick={props.backHandler}
        >
          <Link to={props.to ?? ''} aria-label="Voltar">
            <BackIcon />
          </Link>
        </div>

        <div className={classes.navHeaderTitle}>
          <H2>{props.title}</H2>
        </div>
      </div>

      <Divider />
    </>
  )
}
