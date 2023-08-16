import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from '@my-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}
