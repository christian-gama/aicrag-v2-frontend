import { useEffect } from 'react'
import { IValidation } from '@/services/validators'
import { useForm } from '@/context/models/form'
import {
  ControlDateInput,
  ControlForm,
  ControlInput,
  ControlSelectInput
} from '@/components/organisms/Control'
import { TaskType } from '@/external/graphql/generated'
import * as classes from './stylesheet'

type TaskProps = {
  submitHandler: () => Promise<() => void | void>
  renderButtons: () => JSX.Element
  value?: string
  validator: IValidation
}

export const Task: React.FC<TaskProps> = ({
  submitHandler,
  renderButtons,
  validator,
  value
}) => {
  const {
    formActions: { setFormData, setInputValue },
    state
  } = useForm<{ duration: string, type: TaskType }>()
  const { data } = state.form

  const getDuration = () => {
    const type = document.querySelector(
      'select[name="type"]'
    ) as HTMLSelectElement

    return type.value === 'TX' ? '30' : '2.4'
  }

  const updateDurationOnChange = () => {
    setFormData('duration', getDuration())
    setInputValue('duration', getDuration())
  }

  useEffect(() => {
    updateDurationOnChange()
  }, [data.type])

  return (
    <div className={classes.task} data-testid="new-task">
      {value && (
        <div className={classes.taskValue}>
          <span className={classes.taskValueText}>Valor:</span>
          <span className={classes.taskValuePrice}>{value}</span>
        </div>
      )}

      <div className={classes.taskFormWrapper}>
        <ControlForm validator={validator} submitHandler={submitHandler}>
          <div className={classes.taskForm}>
            <div style={{ gridArea: 'taskId' }}>
              <ControlInput label="Identificação" name="taskId" />
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

            <div className={classes.taskButtonGroup}>{renderButtons()}</div>
          </div>
        </ControlForm>
      </div>
    </div>
  )
}
