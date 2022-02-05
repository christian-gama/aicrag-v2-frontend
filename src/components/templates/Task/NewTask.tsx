import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormContext } from '@/context/models/form'
import { Button } from '@/components/atoms/Button'
import { makeTaskValidation } from '@/external/factories/validation'
import { useCreateTaskMutation } from '@/external/graphql/generated'
import { popoverVar } from '@/external/graphql/reactiveVars'
import { Task } from './Task'

export const NewTask: React.FC = () => {
  const navigate = useNavigate()
  const { state } = useContext(FormContext)
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
      navigate('/invoice')
      popoverVar.setPopover('Tarefa criada com sucesso', 'success')
    }
  }

  const renderButtons = () => (
    <>
      <Button style={{ mode: 'outlined', color: 'light' }}>Cancelar</Button>

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
