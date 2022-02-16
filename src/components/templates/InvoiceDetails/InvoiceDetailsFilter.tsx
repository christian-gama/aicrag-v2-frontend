import { Filter } from '@/components/molecules/Table/Filter'
import {
  ControlInput,
  ControlSelectInput
} from '@/components/organisms/Control'
import {
  GetInvoiceByMonthOperator,
  GetInvoiceByMonthPeriod,
  GetInvoiceByMonthType
} from '@/external/graphql/generated'

export const InvoiceDetailsFilter: React.FC = () => {
  return (
    <Filter height={{ mobile: '38rem', tablet: '38rem', widescreen: '26rem' }}>
      <div style={{ gridColumn: '1/-1' }}>
        <ControlInput label="Identificação" name="taskId" />
      </div>

      <ControlSelectInput
        options={[
          { label: 'Transcrição (TX)', value: GetInvoiceByMonthType.Tx },
          { label: 'Correção (QA)', value: GetInvoiceByMonthType.Qa },
          { label: 'Ambos', value: GetInvoiceByMonthType.Both }
        ]}
        defaultValue={GetInvoiceByMonthType.Both}
        label="Tipo"
        name="type"
      />

      <div style={{ display: 'flex', gap: '0.8rem' }}>
        <div style={{ flex: 2 }}>
          <ControlSelectInput
            options={[
              { label: 'Igual a', value: GetInvoiceByMonthOperator.Eq },
              {
                label: 'Maior ou igual a',
                value: GetInvoiceByMonthOperator.Gte
              },
              {
                label: 'Menor ou igual a',
                value: GetInvoiceByMonthOperator.Lte
              }
            ]}
            defaultValue={GetInvoiceByMonthOperator.Lte}
            label="Filtrar como"
            name="operator"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ControlInput
            defaultValue="30"
            label="Duração"
            name="duration"
            type="number"
            step={1}
            max={30}
            min={1}
          />
        </div>
      </div>

      <ControlSelectInput
        defaultValue=""
        label="Período"
        name="period"
        options={[
          {
            label: 'Últimos 30 dias',
            value: ''
          },
          {
            label: 'Últimos 15 dias',
            value: GetInvoiceByMonthPeriod.Past_15Days
          },
          {
            label: 'Últimos 7 dias',
            value: GetInvoiceByMonthPeriod.Past_7Days
          },
          {
            label: 'Últimos 3 dias',
            value: GetInvoiceByMonthPeriod.Past_3Days
          },
          {
            label: 'Hoje',
            value: GetInvoiceByMonthPeriod.Today
          }
        ]}
      />
    </Filter>
  )
}
