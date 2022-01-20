import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import Button from './Button'

export default {
  title: 'atoms/Button',
  component: Button,
  args: {
    children: 'Button'
  }
} as ComponentMeta<typeof Button>

export const Default: ComponentStoryObj<typeof Button> = {}

export const CyanContained: ComponentStoryObj<typeof Button> = {
  args: {
    style: {
      mode: 'contained',
      color: 'cyan'
    }
  }
}

export const CyanOutlined: ComponentStoryObj<typeof Button> = {
  args: {
    style: {
      mode: 'outlined',
      color: 'cyan'
    }
  }
}

export const WarningContained: ComponentStoryObj<typeof Button> = {
  args: {
    style: {
      mode: 'contained',
      color: 'warning'
    }
  }
}
export const WarningOutlined: ComponentStoryObj<typeof Button> = {
  args: {
    style: {
      mode: 'outlined',
      color: 'warning'
    }
  }
}

export const DangerContained: ComponentStoryObj<typeof Button> = {
  args: {
    style: {
      mode: 'contained',
      color: 'danger'
    }
  }
}

export const DangerOutlined: ComponentStoryObj<typeof Button> = {
  args: {
    style: {
      mode: 'outlined',
      color: 'danger'
    }
  }
}

export const InfoContained: ComponentStoryObj<typeof Button> = {
  args: {
    style: {
      mode: 'contained',
      color: 'info'
    }
  }
}

export const InfoOutlined: ComponentStoryObj<typeof Button> = {
  args: {
    style: {
      mode: 'outlined',
      color: 'info'
    }
  }
}

export const LightContained: ComponentStoryObj<typeof Button> = {
  args: {
    style: {
      mode: 'contained',
      color: 'light'
    }
  }
}

export const LightOutlined: ComponentStoryObj<typeof Button> = {
  args: {
    style: {
      mode: 'outlined',
      color: 'light'
    }
  }
}

export const DarkLoading: ComponentStoryObj<typeof Button> = {
  args: {
    loading: true
  }
}

export const LightLoading: ComponentStoryObj<typeof Button> = {
  args: {
    loading: true,
    style: {
      color: 'light'
    }
  }
}

export const OutlinedLoading: ComponentStoryObj<typeof Button> = {
  args: {
    loading: true,
    style: {
      color: 'light',
      mode: 'outlined'
    }
  }
}

export const Disabled: ComponentStoryObj<typeof Button> = {
  args: {
    disabled: true
  }
}

export const ExtraLarge: ComponentStoryObj<typeof Button> = {
  args: {
    style: {
      size: 'xlg'
    }
  }
}

export const Large: ComponentStoryObj<typeof Button> = {
  args: {
    style: {
      size: 'lg'
    }
  }
}

export const Medium: ComponentStoryObj<typeof Button> = {
  args: {
    style: {
      size: 'md'
    }
  }
}

export const Small: ComponentStoryObj<typeof Button> = {
  args: {
    style: {
      size: 'sm'
    }
  }
}

export const ButtonWithOnClick: ComponentStoryObj<typeof Button> = {
  args: {
    onClick: () => {
      alert('This button has been clicked.')
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByText(/button/i))
  }
}
