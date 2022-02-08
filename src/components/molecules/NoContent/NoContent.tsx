import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/atoms/Button'
import { InsertContentIcon } from '@/components/utils/icons/InsertContentIcon'
import { H2 } from '@/components/utils/texts/H2'
import * as classes from './stylesheet'

type NoContentProps = {}

export const NoContent: React.FC<NoContentProps> = (props) => {
  const navigate = useNavigate()

  return (
    <div className={classes.noContent} data-testid="no-content">
      <H2>Parece que não há nada por aqui...</H2>

      <InsertContentIcon />

      <Button style={{ size: 'xlg' }} onClick={() => navigate('/')}>
        Adicionar nova tarefa
      </Button>
    </div>
  )
}
