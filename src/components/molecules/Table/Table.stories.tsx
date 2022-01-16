import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import Table from '.'

export default {
  title: 'molecules/Table',
  component: Table.Main
} as ComponentMeta<typeof Table.Main>

const Template: ComponentStory<typeof Table.Main> = (args) => {
  return (
    <Table.Main {...args}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Header 1</Table.Th>
          <Table.Th>Header 2</Table.Th>
          <Table.Th>Header 3</Table.Th>
          <Table.Th>Header 4</Table.Th>
          <Table.Th>Header 5</Table.Th>
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody>
        <Table.Tr>
          <Table.Td>Cell 1</Table.Td>
          <Table.Td>Cell 2</Table.Td>
          <Table.Td>Cell 3</Table.Td>
          <Table.Td>Cell 4</Table.Td>
          <Table.Td>Cell 5</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Cell 1</Table.Td>
          <Table.Td>Cell 2</Table.Td>
          <Table.Td>Cell 3</Table.Td>
          <Table.Td>Cell 4</Table.Td>
          <Table.Td>Cell 5</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Cell 1</Table.Td>
          <Table.Td>Cell 2</Table.Td>
          <Table.Td>Cell 3</Table.Td>
          <Table.Td>Cell 4</Table.Td>
          <Table.Td>Cell 5</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Cell 1</Table.Td>
          <Table.Td>Cell 2</Table.Td>
          <Table.Td>Cell 3</Table.Td>
          <Table.Td>Cell 4</Table.Td>
          <Table.Td>Cell 5</Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table.Main>
  )
}

export const Default = Template.bind({})

export const WithShowinUpText = Template.bind({})
WithShowinUpText.args = {
  showingUp: {
    current: 1,
    total: 10
  }
}
