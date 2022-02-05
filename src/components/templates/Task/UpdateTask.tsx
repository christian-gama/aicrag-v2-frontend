import { DateTime } from 'luxon'
import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { FormContext } from '@/context/models/form'
import { Button } from '@/components/atoms/Button'
import { Alert } from '@/components/molecules/Alert'
import { makeTaskValidation } from '@/external/factories/validation'
import {
  useDeleteTaskMutation,
  useFindOneTaskQuery,
  useUpdateTaskMutation
} from '@/external/graphql/generated'
import { popoverVar } from '@/external/graphql/reactiveVars'
import { getBrlFromUsd } from '@/external/vendors/getBrlFromUsd'
import { Task } from './Task'

export const UpdateTask: React.FC = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [isAlertOpen, setIsAlertOpen] = useState(false)
  const [taskValue, setTaskValue] = useState(0)
  const [BRLQuote, setBRLQuote] = useState(5)

  const [updateTask] = useUpdateTaskMutation()
  const [deleteTask] = useDeleteTaskMutation()
  const { data } = useFindOneTaskQuery({
    variables: { id },
    onError: () => {
      navigate('/invoice')
    }
  })

  const { dispatch, state } = useContext(FormContext)
  const { form } = state

  useEffect(() => {
    const inputs = [
      'commentary',
      'duration',
      'taskId',
      'status',
      'date',
      'type'
    ] as const

    inputs.forEach((input) => {
      dispatch({
        type: 'INPUT/SET_VALUE',
        payload: {
          value: {
            [input]:
              input === 'date'
                ? DateTime.fromISO(data?.findOneTask.task[input].full).toFormat(
                  'dd/MM/yyyy HH:mm'
                )
                : data?.findOneTask.task[input].toString() ?? ''
          }
        }
      })

      dispatch({
        type: 'FORM/SET_FORM_DATA',
        payload: {
          data: {
            [input]:
              input === 'date'
                ? data?.findOneTask.task[input].full
                : data?.findOneTask.task[input]
          }
        }
      })
    })
  }, [data])

  const deleteTaskHandler = async () => {
    await deleteTask({
      variables: {
        id
      }
    })

    navigate('/invoice')
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
      navigate('/invoice')
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

  useEffect(() => {
    let convertedValue = 0

    if (data) {
      const task = data.findOneTask.task
      const value = task.usd

      if (task.user.settings.currency === 'BRL') {
        convertedValue = +(BRLQuote * value).toFixed(2)
      } else {
        convertedValue = +value.toFixed(2)
      }
    }

    setTaskValue(convertedValue)
  }, [data, BRLQuote])

  useEffect(() => {
    getBrlFromUsd()
      .then((brlQuote) => setBRLQuote(brlQuote))
      .catch(() => setBRLQuote(5))
  }, [])

  return (
    <>
      <Task
        validator={makeTaskValidation()}
        submitHandler={submitHandler}
        renderButtons={renderButtons}
        value={`${
          data?.findOneTask.task.user.settings.currency === 'BRL' ? 'R$' : '$'
        } ${taskValue}`}
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
