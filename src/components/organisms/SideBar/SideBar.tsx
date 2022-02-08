import { Link } from 'react-router-dom'
import { LogoIcon } from '@/components/utils/icons'
import { P } from '@/components/utils/texts/P'
import { SideBarButton } from './SideBarButton'
import { SideBarIcon } from './SideBarIcon'
import * as classes from './stylesheet'

export const SideBar: React.FC = () => {
  return (
    <nav className={classes.sideBar} data-testid="side-bar">
      <div className={classes.sideBarTop}>
        <div className={classes.sideBarLogoWrapper}>
          <div className={classes.sideBarLogo}>
            <Link to="/">
              <LogoIcon size="md" />
            </Link>
          </div>
        </div>

        <ul className={classes.sideBarButtonGroup}>
          <SideBarButton Icon={<SideBarIcon name="newTask" />} to="/">
            Nova tarefa
          </SideBarButton>

          <SideBarButton Icon={<SideBarIcon name="account" />} to="/account">
            Minha conta
          </SideBarButton>

          <SideBarButton Icon={<SideBarIcon name="invoice" />} to="/invoice">
            Faturas
          </SideBarButton>
        </ul>
      </div>

      <footer className={classes.sideBarFooter}>
        <P color="primary">
          © 2022 Copyright Aicrag.Todos os direitos reservados.
        </P>
      </footer>
    </nav>
  )
}
