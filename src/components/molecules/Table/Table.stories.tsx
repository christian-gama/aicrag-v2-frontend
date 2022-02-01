import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import faker from 'faker'
import { randomNumber, arrayFrom } from '@/tests/helpers'
import TableComponent from '.'

const randomCapitalizedWord = () =>
  faker.random
    .words(randomNumber(1, 3))
    .replace(/\b\w/g, (letter) => letter.toUpperCase())

type Args<T extends unknown> = T & { columns: number, rows: number }

export default {
  title: 'molecules/Table',
  component: TableComponent.Main,
  args: {
    rows: 4,
    columns: 4,
    showingUp: undefined
  },
  argTypes: {
    rows: {
      name: 'Rows',
      type: { name: 'number', required: true },
      control: {
        type: 'range',
        min: 1,
        max: 10
      }
    },
    columns: {
      name: 'Columns',
      type: { name: 'number', required: true },
      control: {
        type: 'range',
        min: 1,
        max: 5
      }
    }
  },
  decorators: [
    (story, { args }) => {
      const customArgs = args as Args<typeof args>

      return story({
        args: {
          ...customArgs,
          children: (
            <>
              <TableComponent.Thead>
                <TableComponent.Tr>
                  {arrayFrom(customArgs.columns).map((_, i) => (
                    <TableComponent.Th key={i}>
                      {randomCapitalizedWord()}
                    </TableComponent.Th>
                  ))}
                </TableComponent.Tr>
              </TableComponent.Thead>

              <TableComponent.Tbody>
                {arrayFrom(customArgs.rows ?? 4).map((_, i) => (
                  <TableComponent.Tr key={i}>
                    {arrayFrom(customArgs.columns).map((_, i) => (
                      <TableComponent.Td key={i}>
                        {randomCapitalizedWord()}
                      </TableComponent.Td>
                    ))}
                  </TableComponent.Tr>
                ))}
              </TableComponent.Tbody>
            </>
          )
        }
      })
    }
  ]
} as ComponentMeta<typeof TableComponent.Main>

export const Table: ComponentStoryObj<typeof TableComponent.Main> = {}
