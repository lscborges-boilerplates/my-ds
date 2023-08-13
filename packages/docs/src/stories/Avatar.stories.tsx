import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarProps } from '@my-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://avatars.githubusercontent.com/u/4060187?v=4',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
