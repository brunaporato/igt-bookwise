import { styled } from '@/styles/stitches.config'

export const ReviewContainer = styled('div', {
  background: '$gray700',
  padding: '$6',
  alignSelf: 'stretch',
  borderRadius: '$md',

  '> p': {
    fontSize: '$sm',
    color: '$gray300',
    lineHeight: '1.6',
  },
})

export const TopCard = styled('section', {
  display: 'flex',
  gap: '$6',
  marginBottom: '$6',

  '.infos': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: '1 0 0',
    padding: '$1 0',
  },
})

export const TitleAuthor = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
  gap: 2,

  h2: {
    fontSize: '$md',
    lineHeight: 1.4,
  },

  span: {
    fontSize: '$sm',
    color: '$gray400',
    lineHeight: 1.6,
  },
})
