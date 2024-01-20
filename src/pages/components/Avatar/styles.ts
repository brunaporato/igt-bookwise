import { styled } from '@/styles/stitches.config'

export const AvatarContainer = styled('img', {
  borderRadius: '$full',
  border: '1px solid #9694F5',

  cursor: 'pointer',

  variants: {
    variant: {
      card: {
        width: 40,
        height: 40,
      },
      profile: {
        width: 72,
        height: 72,

        cursor: 'default',
      },
    },
  },
})
