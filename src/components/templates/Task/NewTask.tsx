import { useNavigate } from 'react-router-dom'
import { useForm } from '@/context/models/form'
import { Button } from '@/components/atoms/Button'
import { makeTaskValidation } from '@/external/factories/validation'
import {
  TaskStatus,
  TaskType,
  useCreateTaskMutation
} from '@/external/graphql/generated'
import { popoverVar, refetchInvoiceVar } from '@/external/graphql/reactiveVars'
import { Task } from './Task'

export const NewTask: React.FC = () => {
  const navigate = useNavigate()
  const {
    formActions: { resetForm },
    state
  } = useForm<{
    commentary: string
    status: TaskStatus
    duration: string
    taskId: string
    type: TaskType
    date: string
  }>()
  const { data } = state.form

  const [createTask] = useCreateTaskMutation()

  const submitHandler = async () => {
    await createTask({
      variables: {
        commentary: data.commentary,
        duration: +data.duration,
        status: data.status,
        taskId: data.taskId,
        date: data.date,
        type: data.type
      }
    })

    return () => {
      refetchInvoiceVar.refetch()
      navigate('/invoice')
      popoverVar.setPopover('Tarefa criada com sucesso', 'success')
    }
  }

  const renderButtons = () => (
    <>
      <Button style={{ mode: 'outlined', color: 'light' }} onClick={resetForm}>
        Cancelar
      </Button>

      <Button type="submit">Salvar</Button>
    </>
  )

  return (
    <Task
      validator={makeTaskValidation()}
      submitHandler={submitHandler}
      renderButtons={renderButtons}
    />
  )
}
