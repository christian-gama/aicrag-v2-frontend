import { ComponentStory, ComponentMeta, StoryObj } from '@storybook/react'
import { fireEvent, userEvent, within } from '@storybook/testing-library'
import React from 'react'
import Button from './Button'

export default {
  title: 'atoms/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Button'
}

export const CyanContained = Template.bind({})
CyanContained.args = {
  children: 'Button',
  style: {
    mode: 'contained',
    color: 'cyan'
  }
}

export const CyanOutlined = Template.bind({})
CyanOutlined.args = {
  children: 'Button',
  style: {
    mode: 'outlined',
    color: 'cyan'
  }
}

export const WarningContained = Template.bind({})
WarningContained.args = {
  children: 'Button',
  style: {
    mode: 'contained',
    color: 'warning'
  }
}

export const WarningOutlined = Template.bind({})
WarningOutlined.args = {
  children: 'Button',
  style: {
    mode: 'outlined',
    color: 'warning'
  }
}

export const DangerContained = Template.bind({})
DangerContained.args = {
  children: 'Button',
  style: {
    mode: 'contained',
    color: 'danger'
  }
}

export const DangerOutlined = Template.bind({})
DangerOutlined.args = {
  children: 'Button',
  style: {
    mode: 'outlined',
    color: 'danger'
  }
}

export const InfoContained = Template.bind({})
InfoContained.args = {
  children: 'Button',
  style: {
    mode: 'contained',
    color: 'info'
  }
}

export const InfoOutlined = Template.bind({})
InfoOutlined.args = {
  children: 'Button',
  style: {
    mode: 'outlined',
    color: 'info'
  }
}

export const LightContained = Template.bind({})
LightContained.args = {
  children: 'Button',
  style: {
    mode: 'contained',
    color: 'light'
  }
}

export const LightOutlined = Template.bind({})
LightOutlined.args = {
  children: 'Button',
  style: {
    mode: 'outlined',
    color: 'light'
  }
}

export const DarkLoading = Template.bind({})
DarkLoading.args = {
  children: 'Button',
  loading: true
}

export const LightLoading = Template.bind({})
LightLoading.args = {
  children: 'Button',
  loading: true,
  style: {
    color: 'light'
  }
}

export const OutlinedLoading = Template.bind({})
OutlinedLoading.args = {
  children: 'Button',
  loading: true,
  style: {
    color: 'light',
    mode: 'outlined'
  }
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Disabled',
  disabled: true
}

export const ExtraLarge = Template.bind({})
ExtraLarge.args = {
  children: 'Button',
  style: {
    size: 'xlg'
  }
}

export const Large = Template.bind({})
Large.args = {
  children: 'Button',
  style: {
    size: 'lg'
  }
}

export const Medium = Template.bind({})
Medium.args = {
  children: 'Button',
  style: {
    size: 'md'
  }
}

export const Small = Template.bind({})
Small.args = {
  children: 'Button',
  style: {
    size: 'sm'
  }
}

export const ButtonWithOnClick: StoryObj<React.ComponentPropsWithoutRef<typeof Button>> = {
  args: {
    testid: 'button',
    children: 'Button',
    onClick: () => {
      alert('This button has been clicked')
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await Promise.resolve(
      setTimeout(() => {
        fireEvent.click(canvas.getByTestId('button'))
      }, 300)
    )
  }
}

export const FocusedButton: StoryObj<React.ComponentPropsWithoutRef<typeof Button>> = {
  args: {
    testid: 'button',
    children: 'Button'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByTestId('button'))
  }
}
