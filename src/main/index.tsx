import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom'
import '@/application/common/stylesheet/global.css'
import { Provider, useDispatch } from 'react-redux'
import FormProvider from '@/application/models/context/form/FormProvider'
import { calendarActions } from '@/application/models/redux/calendar'
import store, { AppDispatch } from '@/application/store'
import Calendar from '@/presentation/components/Calendar'
import Table from '@/presentation/components/Table'
import DateData from '@/presentation/components/Table/subComponents/DateData'
import Alert from '@/presentation/components/UI/Alert'
import Button from '@/presentation/components/UI/Button'
import Card from '@/presentation/components/UI/Card'
import Popover from '@/presentation/components/UI/Popover'
import ProgressBar from '@/presentation/components/UI/ProgressBar'
import ControlledInput from '@/presentation/containers/ControlledInput'
import FormContainer from '@/presentation/containers/FormContainer'
import apolloClient from '@/main/graphql/config/apolloClient'

const Element: React.FC = () => {
  const [triggerAllComponents, setTriggerAllComponents] = React.useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const [isLoading, setIsLoading] = React.useState(false)

  if (triggerAllComponents) {
    return (
      <>
        <Button style={{ color: 'cyan', mode: 'contained' }}>cyan</Button>
        <Button style={{ color: 'danger', mode: 'contained' }}>danger</Button>
        <Button style={{ color: 'info', mode: 'contained' }}>info</Button>
        <Button style={{ color: 'light', mode: 'contained' }}>light</Button>
        <Button style={{ color: 'cyan', mode: 'outlined' }}>cyan</Button>
        <Button style={{ color: 'danger', mode: 'outlined' }}>danger</Button>
        <Button style={{ color: 'info', mode: 'outlined' }}>info</Button>
        <Button style={{ color: 'light', mode: 'outlined' }}>light</Button>
        <Button disabled>disabled</Button>
        <Button loading>loading</Button>
        <Button onClick={() => setIsLoading((prev) => !prev)}>loading</Button>

        <Calendar previousDate={Date.now()} />

        <Alert isOpen mode="cancelOnly" type="danger" message="danger" title="danger" />

        <Popover message="Popover" isOpen type="info" duration={10} />

        <Card>
          <div>Something</div>
        </Card>

        <ProgressBar loading={isLoading} />
        <FormProvider>
          <FormContainer submitHandler={async () => {}}>
            <ControlledInput name="teste" label="Testando" type="password" defaultValue="opa" />
          </FormContainer>
        </FormProvider>
      </>
    )
  }

  return (
    <>
      {true && !triggerAllComponents && (
        <Button
          onClick={() => {
            setTriggerAllComponents((prev) => !prev)
            dispatch(calendarActions.openCalendar())
          }}
        >
          Trigger All Components
        </Button>
      )}

      <Table.Main>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Header 1</Table.Th>
            <Table.Th>Header 2</Table.Th>
            <Table.Th>Header 3</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          <Table.Tr>
            <Table.Td>
              <DateData primaryDate="Ago" secondaryDate="2021" />
            </Table.Td>
            <Table.Td>Data 2</Table.Td>
          </Table.Tr>

          <Table.Tr>
            <Table.Td>
              <DateData primaryDate="Dez" secondaryDate="2021" />
            </Table.Td>
            <Table.Td>Data 2</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table.Main>
    </>
  )
}

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Provider store={store}>
      <Element />
    </Provider>
  </ApolloProvider>,

  document.getElementById('root')
)
