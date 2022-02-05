import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormContext } from '@/context/models/form'
import { Button } from '@/components/atoms/Button'
import {
  ControlDateInput,
  ControlForm,
  ControlInput,
  ControlSelectInput
} from '@/components/organisms/Control'
import { makeTaskValidation } from '@/external/factories/validation'
import { useCreateTaskMutation } from '@/external/graphql/generated'
import { popoverVar } from '@/external/graphql/reactiveVars'
import * as classes from './stylesheet'

export const NewTask: React.FC = () => {
  const navigate = useNavigate()
  const { dispatch, state } = useContext(FormContext)
  const { data } = state.form

  const getDuration = () => {
    const type = document.querySelector(
      'select[name="type"]'
    ) as HTMLSelectElement

    return type.value === 'TX' ? '30' : '2.4'
  }

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

  const updateDurationOnChange = () => {
    dispatch({
      type: 'FORM/SET_FORM_DATA',
      payload: {
        data: { duration: getDuration() }
      }
    })
    dispatch({
      type: 'INPUT/SET_VALUE',
      payload: {
        value: { duration: getDuration() }
      }
    })
  }

  return (
    <div className={classes.newTask} data-testid="new-task">
      <ControlForm
        validator={makeTaskValidation()}
        submitHandler={submitHandler}
      >
        <div className={classes.newTaskForm}>
          <div style={{ gridArea: 'taskId' }}>
            <ControlInput label="Identificação" name="taskId" autoFocus />
          </div>

          <div style={{ gridArea: 'date' }}>
            <ControlDateInput label="Data de conclusão" name="date" />
          </div>

          <div style={{ gridArea: 'type' }}>
            <ControlSelectInput
              onChange={updateDurationOnChange}
              defaultValue="TX"
              label="Tipo"
              name="type"
              options={[
                { label: 'Transcrição', value: 'TX' },
                { label: 'Correção', value: 'QA' }
              ]}
            />
          </div>

          <div style={{ gridArea: 'duration' }}>
            <ControlInput
              defaultValue={data.type === 'TX' ? '30' : '2.4'}
              max={data.type === 'TX' ? '30' : '2.5'}
              label="Duração"
              name="duration"
              type="number"
              step={0.1}
              min={0.1}
              required
            />
          </div>

          <div style={{ gridArea: 'status' }}>
            <ControlSelectInput
              defaultValue="completed"
              label="Status"
              name="status"
              options={[
                { label: 'Completo', value: 'completed' },
                { label: 'Em progresso', value: 'in_progress' }
              ]}
            />
          </div>

          <div style={{ gridArea: 'commentary' }}>
            <ControlInput
              label="Observação"
              name="commentary"
              type="textArea"
            />
          </div>

          <div className={classes.newTaskButtonGroup}>
            <Button style={{ mode: 'outlined', color: 'light' }}>
              Cancelar
            </Button>

            <Button type="submit">Salvar</Button>
          </div>
        </div>
      </ControlForm>
    </div>
  )
}
