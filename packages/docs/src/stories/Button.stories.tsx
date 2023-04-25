import { StoryObj, Meta } from '@storybook/react'

import { Button } from '@wasd-ui/react'

export default {
  title: 'Button',
  component: Button,
} as Meta

export const Primary: StoryObj = {
  args: {
    children: 'Botão',
  },
}

export const Secondary: StoryObj = {
  args: {
    children: 'Enviar',
  },
}
