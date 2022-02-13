import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/atoms/Button'
import { InsertContentIcon } from '@/components/utils/icons/InsertContentIcon'
import { H3 } from '@/components/utils/texts/H3'
import * as classes from './stylesheet'

type NoContentProps = {}

export const NoContent: React.FC<NoContentProps> = (props) => {
  const navigate = useNavigate()

  return (
    <div className={classes.noContent} data-testid="no-content">
      <H3>Parece que não há nada por aqui...</H3>

      <InsertContentIcon />

      <Button style={{ size: 'lg' }} onClick={() => navigate('/')}>
        Adicionar nova tarefa
      </Button>
    </div>
  )
}
