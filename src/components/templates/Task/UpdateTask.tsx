import { DateTime } from 'luxon'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from '@/context/models/form'
import { useGetTaskValue } from '@/components/_hooks'
import { Button } from '@/components/atoms/Button'
import { LoadingSkeleton } from '@/components/atoms/LoadingSkeleton'
import { Alert } from '@/components/molecules/Alert'
import { makeTaskValidation } from '@/external/factories/validation'
import {
  TaskStatus,
  TaskType,
  useDeleteTaskMutation,
  useFindOneTaskQuery,
  useUpdateTaskMutation
} from '@/external/graphql/generated'
import { popoverVar, refetchInvoiceVar } from '@/external/graphql/reactiveVars'
import { Task } from './Task'

export const UpdateTask: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [isAlertOpen, setIsAlertOpen] = useState(false)
  const { currency, getTaskValue } = useGetTaskValue(0)

  const [updateTask] = useUpdateTaskMutation()
  const [deleteTask] = useDeleteTaskMutation()
  const { data, loading } = useFindOneTaskQuery({
    variables: { id },
    onError: () => {
      navigate('-1')
    }
  })
  const {
    formActions: { setInputValue, setFormData },
    state
  } = useForm<{
    commentary: string
    status: TaskStatus
    duration: string
    taskId: string
    type: TaskType
    date: string
  }>()
  const { form } = state

  useEffect(() => {
    const inputs: Array<keyof typeof state.form.data> = [
      'commentary',
      'duration',
      'taskId',
      'status',
      'date',
      'type'
    ]

    if (data) {
      const {
        findOneTask: { task }
      } = data

      inputs.forEach((input) => {
        setFormData(input, input === 'date' ? task[input].full : task[input])
        setInputValue(
          input,
          input === 'date'
            ? DateTime.fromISO(task[input].full).toFormat('dd/MM/yyyy HH:mm')
            : task[input].toString()
        )
      })
    }
  }, [data, form.isResetting])

  if (loading) {
    return (
      <LoadingSkeleton
        marginTop="5rem"
        gap="6.2rem"
        columns={3}
        width="70%"
        amount={5}
      />
    )
  }

  if (!data) return null

  const {
    findOneTask: { task }
  } = data

  const deleteTaskHandler = async () => {
    await deleteTask({
      variables: {
        id
      }
    })

    refetchInvoiceVar.refetch()
    navigate(-1)
    popoverVar.setPopover('Tarefa deletada com sucesso', 'success')
  }

  const submitHandler = async () => {
    await updateTask({
      variables: {
        commentary: form.data.commentary,
        duration: +form.data.duration,
        status: form.data.status,
        taskId: form.data.taskId,
        date: form.data.date,
        type: form.data.type,
        id
      }
    })

    return () => {
      refetchInvoiceVar.refetch()
      navigate(-1)
      popoverVar.setPopover('Tarefa atualizada com sucesso', 'success')
    }
  }

  const renderButtons = () => (
    <>
      <Button
        style={{ mode: 'outlined', color: 'danger' }}
        onClick={() => setIsAlertOpen((isAlertOpen) => !isAlertOpen)}
      >
        Deletar
      </Button>

      <Button type="submit">Atualizar</Button>
    </>
  )

  return (
    <>
      <Task
        validator={makeTaskValidation()}
        submitHandler={submitHandler}
        renderButtons={renderButtons}
        value={`${currency === 'BRL' ? 'R$' : '$'} ${getTaskValue(task.usd)}`}
      />

      <Alert
        message="Você está prestes a deletar uma tarefa e essa ação é irreversível. Você tem certeza de que quer continuar?"
        onCancel={() => setIsAlertOpen(false)}
        title="Uma confirmação é necessária"
        onAction={deleteTaskHandler}
        mode="actionAndCancel"
        actionName="Deletar"
        isOpen={isAlertOpen}
        type="danger"
      />
    </>
  )
}
