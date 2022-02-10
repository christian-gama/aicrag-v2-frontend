import { Menu } from '@/components/molecules/Menu'
import * as classes from './stylesheet'

export const Account: React.FC = ({ children }) => {
  return (
    <div className={classes.accountWrapper}>
      <div className={classes.account}>
        <div className={classes.accountMenu}>
          <Menu
            buttons={[
              {
                buttonName: 'Dados',
                to: '/account/data'
              },
              {
                buttonName: 'Segurança',
                to: '/account/security'
              }
            ]}
          />
        </div>

        <main>{children}</main>
      </div>
    </div>
  )
}
