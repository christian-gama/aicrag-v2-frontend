import { Link } from 'react-router-dom'
import { LogoIcon } from '@/components/utils/icons'
import { P } from '@/components/utils/texts/P'
import { SideBarButton } from './SideBarButton'
import { SideBarIcon } from './SideBarIcon'
import * as classes from './stylesheet'

export const SideBar: React.FC = () => {
  return (
    <div className={classes.sideBar} data-testid="side-bar">
      <div className={classes.sideBarTop}>
        <div className={classes.sideBarLogoWrapper}>
          <div className={classes.sideBarLogo}>
            <Link to="/">
              <LogoIcon size="md" />
            </Link>
          </div>
        </div>

        <div className={classes.sideBarButtonGroup}>
          <SideBarButton Icon={<SideBarIcon name="newTask" />} to="/">
            Nova tarefa
          </SideBarButton>

          <SideBarButton Icon={<SideBarIcon name="account" />} to="/account">
            Minha conta
          </SideBarButton>

          <SideBarButton Icon={<SideBarIcon name="invoice" />} to="/invoice">
            Fatura
          </SideBarButton>
        </div>
      </div>

      <div className={classes.sideBarFooter}>
        <P color="primary">
          © 2021 Copyright Aicrag.Todos os direitos reservados.
        </P>
      </div>
    </div>
  )
}
