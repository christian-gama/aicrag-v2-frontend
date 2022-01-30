import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '@/components/atoms/Card'
import { Center } from '@/components/utils/Center'
import { Divider } from '@/components/utils/Divider'
import { BackIcon } from '@/components/utils/icons'
import { H2 } from '@/components/utils/texts/H2'
import * as classes from './stylesheet'

type PinProps =
  | {
    isPage: true
    to: string
  }
  | {
    isPage: false
    isOpen: boolean
  }

export const Pin: React.FC<PinProps> = (props) => {
  const [isOpen, setIsOpen] = useState(props.isPage ? undefined : props.isOpen)

  if (isOpen === false) return null

  return (
    <Center>
      <Card>
        <div className={classes.pin} data-testid="pin">
          <div className={classes.pinHeader}>
            <Link
              to={props.isPage ? props.to : ''}
              aria-label="Voltar"
              onClick={
                props.isPage ? undefined : () => setIsOpen((prev) => !prev)
              }
            >
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
