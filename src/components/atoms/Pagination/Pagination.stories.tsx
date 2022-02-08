import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { Pagination as PaginationComponent } from './Pagination'

export default {
  component: PaginationComponent,
  title: 'atoms/Pagination',
  args: {
    totalPages: 10,
    currentPage: 1,
    previousPageHandler: () => {},
    nextPageHandler: () => {}
  },
  argTypes: {
    totalPages: {
      control: {
        type: 'range',
        min: 1,
        max: 10
      }
    },
    currentPage: {
      control: {
        type: 'range',
        min: 1,
        max: 10
      }
    }
  }
} as ComponentMeta<typeof PaginationComponent>

export const Pagination: ComponentStoryObj<typeof PaginationComponent> = {}
