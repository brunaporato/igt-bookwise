import { styled } from '@/styles/stitches.config'

export const TagContainer = styled('button', {
  padding: '$1 $4',
  textAlign: 'center',

  background: 'transparent',
  borderRadius: '$full',
  border: '1px solid $purple100',

  color: '$purple100',
  fontFamily: '$default',

  cursor: 'pointer',

  '&:hover': {
    background: '$purple200',
    color: '$gray100',
    transition: 'all .2s',
  },

  variants: {
    selected: {
      true: {
        borderColor: 'transparent',
        background: '$purple200',
        color: '$gray100',

        cursor: 'default',
      },
    },
  },
})
