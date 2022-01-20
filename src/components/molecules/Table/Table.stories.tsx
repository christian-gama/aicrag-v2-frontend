import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import faker from 'faker'
import React from 'react'
import arrayFrom from '@/tests/helpers/arrayFrom'
import randomNumber from '@/tests/helpers/randomNumber'
import Table from '.'

const randomCapitalizedWord = () =>
  faker.random.words(randomNumber(1, 3)).replace(/\b\w/g, (letter) => letter.toUpperCase())

type Args<T extends unknown> = T & { columns: number, rows: number }

export default {
  title: 'molecules/Table',
  component: Table.Main,
  args: {
    rows: 4,
    columns: 4
  },
  argTypes: {
    rows: {
      name: 'Rows',
      type: { name: 'number', required: true },
      control: {
        type: 'number',
        min: 1,
        max: 10
      }
    },
    columns: {
      name: 'Columns',
      type: { name: 'number', required: true },
      control: {
        type: 'number',
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
              <Table.Thead>
                <Table.Tr>
                  {arrayFrom(customArgs.columns).map((_, i) => (
                    <Table.Th key={i}>{randomCapitalizedWord()}</Table.Th>
                  ))}
                </Table.Tr>
              </Table.Thead>

              <Table.Tbody>
                {arrayFrom(customArgs.rows ?? 4).map((_, i) => (
                  <Table.Tr key={i}>
                    {arrayFrom(customArgs.columns).map((_, i) => (
                      <Table.Td key={i}>{randomCapitalizedWord()}</Table.Td>
                    ))}
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </>
          )
        }
      })
    }
  ]
} as ComponentMeta<typeof Table.Main>

export const Default: ComponentStoryObj<typeof Table.Main> = {}

export const WithShowingUpText: ComponentStoryObj<typeof Table.Main> = {
  args: {
    showingUp: {
      current: 1,
      total: 10
    }
  }
}
