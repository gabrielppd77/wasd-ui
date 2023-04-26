import { StoryObj, Meta } from '@storybook/react'

import { Button } from '@wasd-ui/react'

export default {
  title: 'Button',
  component: Button,
  // component: () => (
  //   <button className="bg-red-400 mt-4 px-4 rounded">button test</button>
  // ),
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
