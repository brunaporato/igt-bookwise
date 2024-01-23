import { styled } from '@/styles/stitches.config'

export const ReviewContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '$6',
  gap: '$5',
  alignSelf: 'stretch',
  background: '$gray700',
  borderRadius: 8,

  '> p': {
    fontSize: '$sm',
    color: '$gray300',
    lineHeight: 1.6,
  },

  '.top': {
    display: 'flex',
    justifyContent: 'space-between',
  },

  '.profile-info': {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    alignItems: 'center',
    columnGap: '$4',

    img: {
      gridRow: 'span 2',
    },

    p: {
      fontWeight: 700,
    },

    span: {
      fontSize: '$sm',
      color: '$gray400',
      lineHeight: 1.6,
    },
  },
})
