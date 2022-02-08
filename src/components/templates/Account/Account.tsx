import { Menu } from '@/components/molecules/Menu'
import * as classes from './stylesheet'

export const Account: React.FC = ({ children }) => {
  return (
    <div className={classes.accountWrapper}>
      <div className={classes.account}>
        <Menu
          buttons={[
            {
              buttonName: 'Dados',
              to: '/account'
            },
            {
              buttonName: 'Segurança',
              to: '/account/security'
            }
          ]}
        />

        <main>{children}</main>
      </div>
    </div>
  )
}
