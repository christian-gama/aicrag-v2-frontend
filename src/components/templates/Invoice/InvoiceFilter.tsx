import { Filter } from '@/components/molecules/Table/Filter'
import { ControlSelectInput } from '@/components/organisms/Control'
import { GetAllInvoicesType } from '@/external/graphql/generated'

export const InvoiceFilter: React.FC = () => {
  return (
    <Filter height={{ mobile: '19rem', tablet: '19rem', widescreen: '14rem' }}>
      <ControlSelectInput
        options={[
          { label: 'Transcrição (TX)', value: GetAllInvoicesType.Tx },
          { label: 'Correção (QA)', value: GetAllInvoicesType.Qa },
          { label: 'Ambos', value: GetAllInvoicesType.Both }
        ]}
        defaultValue={GetAllInvoicesType.Both}
        label="Tipo"
        name="type"
      />
    </Filter>
  )
}
