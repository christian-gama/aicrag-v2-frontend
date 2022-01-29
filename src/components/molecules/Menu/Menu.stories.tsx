import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { arrayFrom } from '@/tests/helpers'
import { Menu as MenuComponent } from './Menu'

type Args<T extends unknown> = T & {
  buttonsCount: number
  activeButtonIndex: number
}

export default {
  title: 'molecules/Menu',
  component: MenuComponent,
  argTypes: {
    buttonsCount: {
      control: {
        type: 'range',
        min: 1,
        max: 5
      }
    },
    activeButtonIndex: {
      control: {
        type: 'number',
        min: 1,
        max: 5
      }
    }
  },
  args: {
    buttonsCount: 3,
    activeButtonIndex: 1
  },
  decorators: [
    (story) => (
      <MemoryRouter>
        <Routes>
          <Route path="/" element={story()} />
        </Routes>
      </MemoryRouter>
    )
  ]
} as ComponentMeta<typeof MenuComponent>

export const Menu: ComponentStoryObj<typeof MenuComponent> = {
  render: (story, { args }) => {
    const customArgs = args as Args<typeof args>

    return (
      <>
        <MenuComponent
          buttons={arrayFrom(customArgs.buttonsCount).map((_, i) => ({
            buttonName: `Button ${i + 1}`,
            to: '/?path=/story/molecules-menu--default',
            active: i === customArgs.activeButtonIndex - 1
          }))}
        />
      </>
    )
  }
}
