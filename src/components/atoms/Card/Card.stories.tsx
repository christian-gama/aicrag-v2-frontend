import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'
import Card from './Card'

export default {
  title: 'atoms/Card',
  component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <div style={{ width: '300px', height: '300px' }}>Any content</div>
  </Card>
)

export const Default = Template.bind({})

export const Centered = Template.bind({})
Centered.args = {
  centered: true
}

export const WithNoRoundness = Template.bind({})
WithNoRoundness.args = {
  roundness: 'none'
}

export const WithSmallRoundness = Template.bind({})
WithSmallRoundness.args = {
  roundness: 'sm'
}

export const WithMediumRoundness = Template.bind({})
WithMediumRoundness.args = {
  roundness: 'md'
}

export const WithLargeRoundness = Template.bind({})
WithLargeRoundness.args = {
  roundness: 'lg'
}

export const WithExtraLargeRoundness = Template.bind({})
WithExtraLargeRoundness.args = {
  roundness: 'xl'
}

export const WithPadding = Template.bind({})
WithPadding.args = {
  style: {
    padding: '10px'
  }
}

export const WithMargin = Template.bind({})
WithMargin.args = {
  style: {
    margin: '50px'
  }
}
