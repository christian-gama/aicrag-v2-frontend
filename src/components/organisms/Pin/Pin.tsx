import { Link } from 'react-router-dom'
import { Card } from '@/components/atoms/Card'
import { Center } from '@/components/utils/Center'
import { Divider } from '@/components/utils/Divider'
import { BackIcon } from '@/components/utils/icons'
import { H2 } from '@/components/utils/texts/H2'
import * as classes from './stylesheet'

export const Pin: React.FC = () => {
  return (
    <Center>
      <Card>
        <div className={classes.pin} data-testid="pin">
          <div className={classes.pinHeader}>
            <Link to="/" aria-label="Voltar">
              <BackIcon />
            </Link>

            <H2>Confirme o seu email</H2>
          </div>

          <Divider />
        </div>
      </Card>
    </Center>
  )
}
