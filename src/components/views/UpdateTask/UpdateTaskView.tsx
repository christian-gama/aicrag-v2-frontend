import { useNavigate } from 'react-router-dom'
import { FormProvider } from '@/context/models/form'
import { Layout } from '@/components/templates/Layout'
import { UpdateTask } from '@/components/templates/Task'

export const UpdateTaskView: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div data-testid="update-task-view">
      <Layout
        pageName="Atualizar tarefa"
        backHandler={() => navigate('/invoice')}
      >
        <FormProvider>
          <UpdateTask />
        </FormProvider>
      </Layout>
    </div>
  )
}
