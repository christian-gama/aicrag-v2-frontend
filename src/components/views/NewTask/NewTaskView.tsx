import { FormProvider } from '@/context/models/form'
import { Layout } from '@/components/templates/Layout'
import { NewTask } from '@/components/templates/Task'

export const NewTaskView: React.FC = () => {
  return (
    <div data-testid="new-task-view">
      <Layout pageName="Nova tarefa">
        <FormProvider>
          <NewTask />
        </FormProvider>
      </Layout>
    </div>
  )
}
