import { FormProvider } from '@/context/models/form'
import { Format } from '@/components/templates/Format'
import { Layout } from '@/components/templates/Layout'

export const FormatView: React.FC = () => {
  return (
    <div data-testid="format-view">
      <Layout pageName="Formatar texto">
        <FormProvider>
            <Format />
        </FormProvider>
      </Layout>
    </div>
  )
}
