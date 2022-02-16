import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/atoms/Button'
import { InsertContentIcon } from '@/components/utils/icons/InsertContentIcon'
import * as classes from './stylesheet'

type NoContentProps = {}

export const NoContent: React.FC<NoContentProps> = (props) => {
  const navigate = useNavigate()

  return (
    <div className={classes.noContent} data-testid="no-content">
      <InsertContentIcon />

      <Button style={{ size: 'lg' }} onClick={() => navigate('/')}>
        Adicionar nova tarefa
      </Button>
    </div>
  )
}
