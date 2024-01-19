import { styled } from '@/styles/stitches.config'

export const SearchContainer = styled('div', {
  display: 'flex',
  padding: '$3 $5',
  gap: '$2',
  alignSelf: 'stretch',
  width: '100%',
  alignItems: 'center',

  borderRadius: '$sm',
  border: '1px solid $gray500',

  '&:focus-within': {
    borderColor: '$green200',
    svg: {
      color: '$green200',
    },
  },

  input: {
    background: '$gray800',
    width: '100%',
    fontSize: '$sm',
    fontFamily: '$default',
    border: 0,
    color: '$gray400',

    lineHeight: 1.6,

    '&:focus': {
      border: 'none',
      outline: 'none',
    },
  },

  svg: {
    color: '$gray500',
  },
})
